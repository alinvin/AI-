<template>
  <div class="data-box">
    <el-row>
      <el-col :span="24" class="db-header" v-if="!hiddenForm">
        <!--自定义表单-->
        <!--<solt name="form"></solt>-->
        <el-form :inline="true" ref="data-form" :rules="rules" label-position="left" :labelWidth="newStyle&&is_expend?'65px':''" :model="params" :show-message="true" :row-key="rowKey" class="data-box-form">
          <!--输入区域-START-->
          <slot name="mustShowInput"></slot>
          <slot name="input" v-if="is_expend||!showExpend"></slot>
          <!--输入区域-END-->
          <!--按钮区域-START-->
          <!--<el-button @click="handleQuery" :style="getButtonStyle()">搜索</el-button>-->
          <el-button @click="searchClick" :style="getButtonStyle()" v-if="!hiddenSearch" class="button" style="vertical-align:top">搜索</el-button>
          <el-button v-if="!hiddenReset" @click="resetFormClick" class="button" style="vertical-align:top">重置</el-button>
          <slot name="button" v-if="!newStyle&&!freeStyle"></slot>
          <div class="iconfont icon-xiala formExpend" @click="formExpendClick" :class="{'active':is_expend}" v-if="showExpend"></div>
          <!--按钮区域-END-->
        </el-form>
      </el-col>
      <!--按钮区域-START-->
      <el-col :span="24" v-if="showExpend&&newStyle&&$slots.button||freeStyle" style="margin-bottom:20px">
        <div style="display:flex">
          <div class="text-left" style="flex-grow:1">
            <slot name="button"></slot>
          </div>
          <div>
            <slot name="right" style="flex-grow:0"></slot>
          </div>
        </div>
      </el-col>
      <!--按钮区域-END-->
      <!--数据区-START-->
      <el-col :span="24" class="db-table">
        <el-table @sort-change="handleSortChange" v-loading.body="showLoading&&loading.state" v-if="!reload" :default-sort="defaultSort" :row-class-name="tableRowClassName" class="data-table" ref="data-table" @selection-change="handleSelectionChange" header-align="center" :max-height="maxHeight" :data="tableData" :height="height" border stripe>
          <slot name="column"></slot>
        </el-table>
      </el-col>
      <!--数据区-END-->
      <el-col :span="24" v-if="pagination" v-show="showPagination" class="row between-span middle-span db-footer">
        <div class="info"><span v-if="!hiddenLeftContent">当前显示{{currentStart}}到{{currentEnd}}条 </span>共{{total}}条</div>
        <!--分页区-->
        <el-pagination :page-sizes="pageSizes" :small="paginationSmall" :page-size="pageSize" :layout="layout" :total="total" :current-page="currentPage" @size-change="handleSizeChange" @current-change="handleCurrentChange">
        </el-pagination>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import net from "@/util/net";

export default {
  name: "data-box",
  componentName: "data-box",
  props: {
    data: Array,
    server: Object, // 请求服务接口
    params: Object, // 请求参数
    rules: Object, // 表单数据校验规则
    autoSearch: Boolean, // 是否开启自动搜索
    defaultServer: Object, // 默认搜索服务地址
    defaultParams: Object, // 默认搜索参数
    defaultSort: Object, // 默认排序字段
    defaultSelection: Array, // 默认选择项
    currentPageNumber: Number,
    // 请求后台排序字段{prop字段order排序方式}
    serverSort: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 新样式
    freeStyle: {
      type: Boolean,
      default: false
    },
    // 展开时候有新样式
    newStyle: {
      type: Boolean,
      default: false
    },
    // 是否关闭跳转指定页
    hiddenJumper: {
      type: Boolean,
      default: false
    },
    // 是否分页small
    paginationSmall: {
      type: Boolean,
      default: false
    },
    // 是否隐藏当前显示条数
    hiddenLeftContent: {
      type: Boolean,
      default: false
    },
    // 是否展示遮罩
    showLoading: {
      type: Boolean,
      default: false
    },
    // 是否隐藏重置按钮
    hiddenReset: {
      type: Boolean,
      default: false
    },
    // 是否隐藏搜索按钮
    hiddenSearch: {
      type: Boolean,
      default: false
    },
    // 数据主键
    rowKey: {
      type: String,
      require: true
    },
    // 是否隐藏表单
    hiddenForm: {
      type: Boolean,
      default: false
    },
    // 是否设置固定高度
    height: {
      type: Number
    },
    // 是否设置最大高度
    maxHeight: {
      type: Number,
      default: 680
    },
    // 追加数据项
    append: {
      type: [String, Array]
    },
    // 是否分页
    pagination: {
      type: Boolean,
      default: true
    },
    // 搜索框是否伸缩
    showExpend: {
      type: Boolean,
      default: false
    },
    buttonWidth: Number,
    size: Number,
    // 给某行添加class
    tableRowClassName: Function,
    // 搜索的判断条件函数
    searchCondition: Function
  },
  data() {
    return {
      tableData: [],
      pageSizes: [10, 20, 30, 40, 100, 200, 500, 1000],
      total: 0,
      pageSize: this.size || 10,
      currentPage: this.currentPageNumber || 1,
      multipleSelection: [],
      currentSort: this.defaultSort,
      is_expend: false, // 是否展开
      loading: {
        state: false
      },
      reload: false
    };
  },
  computed: {
    layout() {
      return (
        (this.size ? "prev, pager, next" : "sizes, prev, pager, next") +
        (this.hiddenJumper ? "" : ", jumper")
      );
    },
    showPagination() {
      return this.total > 0;
    },
    currentStart() {
      return (this.currentPage - 1) * this.pageSize + 1;
    },
    currentEnd() {
      let end = this.currentStart + this.pageSize - 1;
      return Math.min(end, this.total);
    }
  },
  methods: {
    /**
     * 展开图标点击
     */
    formExpendClick() {
      if (this.is_expend) {
        this.resetFormClick();
      }
      this.is_expend = !this.is_expend;
    },
    /**
     * 搜索点击
     */
    searchClick() {
      this.currentPage = 1;
      this.handleQuery();
    },
    /**
     * 重置点击
     */
    resetFormClick() {
      this.$refs["data-form"].resetFields();
      this.$emit("resetForm");
    },
    getButtonStyle() {
      if (this.buttonWidth) {
        return {
          width: this.buttonWidth + "px"
        };
      } else {
        return {};
      }
    },
    /**
     * 处理每页数据数量变化
     */
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleQuery();
    },
    /**
     * 处理当前页码变化
     * 后台页码从0开始
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.handleQuery();
      this.$emit("handleCurrentChange", val);
    },
    /**
     * 处理当前选择项变化
     */
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    /**
     * 设置默认选择项
     */
    setDefaultSelection() {
      if (this.defaultSelection && this.defaultSelection.length) {
        this.$nextTick(() => {
          for (let item of this.defaultSelection) {
            this.$refs["data-table"].toggleRowSelection(
              this.tableData.find(d => d[this.rowKey] === item)
            );
          }
        });
      }
    },
    /**
     * 进行数据校验
     */
    validate(callback) {
      try {
        let fromItems = this.$refs["data-form"].$children.filter(
          x => x.$options.componentName === "ElFormItem"
        );

        let valid = true;
        let count = 0;

        if (fromItems.length === 0) {
          callback(valid);
          return;
        }

        for (let item of fromItems) {
          item.validate("", error => {
            if (error) {
              valid = false;
            }
            if (
              typeof callback === "function" &&
              ++count === fromItems.length
            ) {
              callback(valid);
            }
          });
        }
      } catch (ex) {
        callback(true);
      }
    },
    /**
     * 处理排序
     */
    handleSort() {
      let sort = "";
      this.serverSort.forEach((v, i) => {
        if (i === 0) {
          if (v.prop === "idCard") {
            v.prop = "idCard";
          }
          if (
            v.prop === "caseIdcaseNumber" ||
            v.prop === "caseIdoverdueAmount"
          ) {
            v.prop = "caseId." + v.prop.slice(6);
          }
          sort = sort + (v.prop + "," + v.order);
        } else {
          sort = sort + "&sort=" + (v.prop + "," + v.order);
        }
      });
      return sort;
    },
    /**
     * 处理数据请求
     */
    handleQuery({ defaultServer } = {}) {
      if (this.searchCondition && this.searchCondition()) {
        this.tableData = [];
        return;
      }
      // 获取传递参数
      let params = Object.assign(
        {},
        this.defaultParams || {},
        this.params || {}
      );
      // 获取分页设置
      let pageConfig = this.pagination
        ? {
            size: this.pageSize,
            page: this.currentPage - 1 // 后台页码从0开始
          }
        : {};
      // 获取排序规则
      if (this.serverSort && this.serverSort.length > 0) {
        params.sort = this.handleSort();
      }

      this.validate(
        valid => {
          // 数据校验
          if (!valid) {
            return;
          }

          net
            .send({
              server: defaultServer || this.server,
              data: {
                ...params,
                ...pageConfig
              },
              append: this.append,
              loading: this.loading
            })
            .then(
              ({ content, totalElements }) => {
                this.reload = true;
                // 更新数据信息
                this.tableData = content || [];
                this.reload = false;
                // 更新分页信息
                this.total = totalElements;
                // 设置默认选择项
                this.setDefaultSelection();
                // 请求成功事件
                this.$emit("requestSuccess", this.tableData);
              },
              err => {
                this.tableData = [];
                this.$message(err.reason);
              }
            );
        },
        () => {
          console.log("error");
        }
      );
    },
    /**
     * 重置搜索框
     */
    formResetFields() {
      this.$refs["data-form"].resetFields();
    },
    /**
     * 刷新数据
     */
    refresh() {
      this.currentPage = 1;
      this.handleQuery();
    },
    /**
     * 处理排序变化
     */
    handleSortChange({ prop, order }) {
      if (order) {
        order = order.slice(0, -6);
        if (this.serverSort && this.serverSort.length > 0) {
          this.serverSort.forEach(v => {
            v.prop = prop;
            v.order = order;
          });
        } else {
          this.serverSort.push({ prop, order });
        }
        this.currentPage = 1;
        this.handleQuery();
        this.$emit("sortChange", [{ prop, order }]);
      }
    },
    /**
     * 获取当前选择项
     * 对外数据公开
     */
    getCurrentSelection() {
      return this.multipleSelection;
    },
    /**
     * 清空选择框
     */
    clearSelection() {
      this.$refs["data-table"].clearSelection();
    },
    /**
     * 进行数据校验
     */
    // validate() {
    //   this.$refs['data-form'].validate((valid) => {
    //     if (valid) {
    //       return Promise.resolve()
    //     } else {
    //       return Promise.reject(new Error('验证失败'))
    //     }
    //   })
    // },
    reset() {
      this.$reset();
    },
    /**
     * 数据不重新请求下重载table
     */
    reloadTable() {
      this.reload = true;
      this.reload = false;
    }
  },
  watch: {
    data(value) {
      // 根据外部数据更新
      this.tableData = value || [];
    },
    defaultParams() {
      // 监听默认参数的时候，如果是自动搜索开启才监听
      // if (this.autoSearch === true) {
      this.handleQuery();
      // }
    }
  },
  mounted() {
    if (this.autoSearch === true) {
      Promise.resolve()
        .then(() => {
          this.handleQuery(this.defaultServer);
        })
        .catch(ex => {
          console.log(ex);
        });
    }

    if (this.data) {
      this.tableData = this.data;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.data-box {
  .data-box-form {
    .el-form-item {
      margin-bottom: 20px;
    }
  }
}

.db-table {
  .el-table .caret-wrapper {
    height: 16px;
  }
  .el-table .sort-caret.ascending {
    top: 2px;
  }
  .el-table .sort-caret.descending {
    bottom: 2px;
  }
}
</style>
<style lang="less" scoped>
@import "../styles/variable.less";
@margin: 5px;
.data-box {
  margin: @margin;
}

.data-box .data-table th {
  text-align: center;
}

.db-header {
  text-align: left;
  margin: 0 0;
  margin-top: 13px;
}

.db-footer {
  text-align: right;
  margin: @margin 0;
  .info {
    color: @-font-color-light;
  }
}

.input-area,
.button-area * {
  display: inline-block;
  & * {
    margin: 30px 0;
  }
}

.data-box-form {
  position: relative;
  padding-right: 30px;
  transition: height ease-in 0.2s;
}

.formExpend {
  font-size: 20px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  cursor: pointer;
  &.active {
    transform: rotate(180deg);
    bottom: 25px;
  }
}
</style>

//资源管理
<template>
  <div>
        <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
            <el-table-column property="userName" label="用户名">
            </el-table-column>
            <el-table-column property="accountRole" label="账号角色">
            </el-table-column>
            <el-table-column property="resourcesType" label="资源类型">
            </el-table-column>
            <el-table-column property="robotNumber" label="机器人数量">
            </el-table-column>
            <el-table-column property="resourceNumber" label="可用资源数">
            </el-table-column>
             <el-table-column property="validity" label="有效期">
            </el-table-column>
            <el-table-column property="startTime" label="开始时间">
            </el-table-column>
             <el-table-column property="endTime" label="结束时间">
            </el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                  <el-button type="text" @click="details(scope)">详情</el-button>
                  <el-button type="text" @click="upgrade(scope)">升级</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 详情 -->
        <el-dialog title="资源订单详情" :visible.sync="detailsDialog" class="details">
          <el-table :data="detailsData">
            <el-table-column property="orderType" label="订单类型"></el-table-column>
            <el-table-column property="resourceType" label="资源类型"></el-table-column>
            <el-table-column property="robotNumber" label="机器人数量"></el-table-column>
            <el-table-column property="validity" label="有效期"></el-table-column>
            <el-table-column property="startTime" label="开始时间"></el-table-column>
            <el-table-column property="endTime" label="结束时间"></el-table-column>
            <el-table-column property="orderStatus" label="订单状态"></el-table-column>
          </el-table>
        </el-dialog>
        <!-- 升级 -->
         <el-dialog title="资源升级" :visible.sync="resourceDialog" class="details" width="40%">
           <resource-upgrade></resource-upgrade>
        </el-dialog>
  </div>
</template>
<script>
import ResourceUpgrade from "@/components/resource-management/resource-upgrade.vue";
export default {
  components: {
    ResourceUpgrade
  },
  data() {
    return {
      detailsDialog: false,
      resourceDialog: false,
      tableData: [
        {
          userName: "administrator",
          accountRole: "超级管理员",
          resourcesType: "机器人",
          resourceNumber: "9",
          validity: "12",
          startTime: "2018-03-21",
          endTime: "2018-09-23"
        }
      ],
      detailsData: [
        {
          orderType: "订单",
          resourceType: "机器人资源",
          robotNumber: "9",
          validity: "12个月",
          startTime: "2018-01-12",
          endTime: "2018-12-12",
          orderStatus: "审核通过"
        }
      ]
    };
  },
  methods: {
    details(scope) {
      console.log(scope);
      this.detailsDialog = true;
    },
    upgrade() {
      this.resourceDialog = true;
    }
  }
};
</script>
<style lang="less" scope>
.el-dialog {
  height: 430px;
  overflow: auto;
}
</style>


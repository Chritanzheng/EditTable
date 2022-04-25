<template>
  <div>
    <div id="luckysheet" class="sheet"></div>
    <el-dialog
      title="提示"
      :visible.sync="show"
      width="30%">
      <el-input v-model="inputVal"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="clickBtn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {careSheet} from '../sheetConfig/careSheet'
export default {
  name: 'HelloWorld',
  data () {
    return {
      show:false,
      inputVal: '',
      postion: 1,
      r: '',
      c: '',
    }
  },
  methods: {
    save() {
      // let options = {
      //   title: '表',
      //   lang: 'zh',
      //   container: 'luckysheet',
      //   data: []
      // }
      // let luckysheetfile = luckysheet.getLuckysheetfile();
      // for(let index in luckysheetfile) {
      //   let sheet = luckysheetfile[index];
      //   console.log('sheet:',sheet)
      //   options.data[index] = {
      //     name: sheet.name,
      //     index: index,
      //     column: sheet.data[0].length,
      //     row: sheet.data.length
      //   }
      //   options.data[index].celldata = [];
      //   let i = 0;
      //   for(let r in sheet.data) {
      //     for(let c in sheet.data[r]) {
      //       if(!sheet.data[r][c] || r===0 || r===1) return
      //       options.data[index].celldata[i++] = {
      //         r: r,
      //         c: c,
      //         v: sheet.data[r][c]
      //       }
      //     }
      //   }
      // }
      let data = window.luckysheet.getSheetData();
      let i = 0;
        for(let r in data) {
          for(let c in data[r]) {
            if(!data[r][c] || r===0 || r===1) return
            console.log(data[r][c])
          }
        }
      console.log('options:',data)
    },
    clickBtn() {
      let v = this.inputVal;
      if(this.r&&this.c) {
        const luckysheet = window.luckysheet;
        console.log(this.r,this.c)
        luckysheet.setCellValue(this.r, this.c, v);
        this.show = false;
        this.inputVal = '';
      }
      // console.log(r,c,v)
      
    },
    setCell(r,c,v) {
      const luckysheet = window.luckysheet;
      luckysheet.setCellValue(r, c, v);
    },
    init() {
      // const luckysheet = window.luckysheet;
      // luckysheet.setBothFrozen(false);
      // luckysheet.setVerticalFrozen(false);
      // luckysheet.setRangeShow({row:[0,0],column:[0,0]})
      // luckysheet.setBothFrozen(true,{ row_focus:2, column_focus:0 });
      // luckysheet.setBothFrozen(false);
    }
  },
  mounted() {
    let that = this;
    $(function () {
      //配置项
      const options = {
        container: 'luckysheet', //luckysheet为容器id
        title: '健康检测在线表格',
        lang: 'zh',
        showtoolbar: false,
        showinfobar: false,
        showsheetbar: false,
        showstatisticBar: false,
        showstatisticBarConfig:{
          count: false, // 计数栏
          view: false, // 打印视图
          zoom: false, // 缩放
        },
        sheetFormulaBar: false,
        rowHeaderWidth: 0,
        columnHeaderHeight: 0,
        cellRightClickConfig: {
          copy: false, // 复制
          copyAs: false, // 复制为
          paste: false, // 粘贴
          insertRow: false, // 插入行
          insertColumn: false, // 插入列
          deleteRow: false, // 删除选中行
          deleteColumn: false, // 删除选中列
          deleteCell: false, // 删除单元格
          hideRow: false, // 隐藏选中行和显示选中行
          hideColumn: false, // 隐藏选中列和显示选中列
          rowHeight: false, // 行高
          columnWidth: false, // 列宽
          clear: false, // 清除内容
          matrix: false, // 矩阵操作选区
          sort: false, // 排序选区
          filter: false, // 筛选选区
          chart: false, // 图表生成
          image: false, // 插入图片
          link: false, // 插入链接
          data: false, // 数据验证
          cellFormat: false // 设置单元格格式
        },
        hook:{
          workbookCreateAfter:function(){
            // luckysheet.setBothFrozen(true,{
            //   row_focus:2, column_focus:0
            // });
          },
          cellDragStop: function (cell, postion, sheetFile, ctx, event) {
                    // console.info(cell, postion, sheetFile, ctx, event);
                },
          rowTitleCellRenderBefore:function(rowNum,postion,ctx){
            // console.log(rowNum);
          },
          rowTitleCellRenderAfter:function(rowNum,postion,ctx){
            // console.log(ctx);
          },
          columnTitleCellRenderBefore:function(columnAbc,postion,ctx){
            // console.log(columnAbc);
          },
          columnTitleCellRenderAfter:function(columnAbc,postion,ctx){
            // console.log(postion);
          },
          cellRenderBefore:function(cell,postion,sheetFile,ctx){
            // console.log(cell,postion,sheetFile,ctx);
          },
          cellRenderAfter:function(cell,postion,sheetFile,ctx){
            // console.log(postion);
          },
          cellMousedownBefore:function(cell,postion,sheetFile,ctx){
            // console.log('position',postion);
            // that.postion = postion;
            // that.show = true;
            // return false;
          },
          cellMousedown:function(cell,postion,sheetFile,ctx){
            // console.log(sheetFile);
          },
          sheetMousemove:function(cell,postion,sheetFile,moveState,ctx){
            // console.log(cell,postion,sheetFile,moveState,ctx);
          },
          sheetMouseup:function(cell,postion,sheetFile,moveState,ctx){
            // console.log(cell,postion,sheetFile,moveState,ctx);
          },
          cellAllRenderBefore:function(data,sheetFile,ctx){
            // console.info(data,sheetFile,ctx)
          },
          updated:function(operate){
            // console.info(operate)
          },
          cellUpdateBefore:function(r,c,value,isRefresh){
            console.info('cellUpdateBefore',r,c,value,isRefresh)
            if(!value) return false
          },
          cellUpdated:function(r,c,oldValue, newValue, isRefresh){
            console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
            luckysheet.exitEditMode()
          },
          sheetActivate:function(index, isPivotInitial, isNewSheet){
            // console.info(index, isPivotInitial, isNewSheet)
          },
          rangeSelect:function(index, sheet){
            // console.info(index, sheet)
          },
          commentInsertBefore:function(r, c){
            // console.info(r, c)
          },
          commentInsertAfter:function(r, c, cell){
            // console.info(r, c, cell)
          },
          commentDeleteBefore:function(r, c, cell){
            // console.info(r, c, cell)
          },
          commentDeleteAfter:function(r, c, cell){
            // console.info(r, c, cell)
          },
          commentUpdateBefore:function(r, c, value){
            // console.info(r, c, value)
          },
          commentUpdateAfter:function(r, c, oldCell, newCell ){
            // console.info(r, c, oldCell, newCell)
          },
          cellEditBefore:function(range ){
            // luckysheet.setCellValue(3, 5, '哈哈哈');
            // that.setCell();
            console.log(range);
            that.c = range[0].column[0];
            that.r = range[0].row[0];
            that.show = true;
            return false
          },
          workbookCreateAfter:function(json){
            // console.info(json)
          },
          rangePasteBefore:function(range,data){
            // console.info('rangePasteBefore',range,data)
            // return false; //Can intercept paste
          },
					},
        data: [
          {
            "name": "护理记录表", //工作表名称
            "color": "", //工作表颜色
            "index": 0, //工作表索引
            "status": 1, //激活状态
            "order": 0, //工作表的下标
            "hide": 0,//是否隐藏
            "row": 10, //行数
            "column": 12, //列数
            "defaultRowHeight": 30, //自定义行高
            "defaultColWidth": 100, //自定义列宽
            "celldata": [{
              "r": 0,
              "c": 5,
              "v": "24小时入量",
              "ht": 0, //水平居中
              "vt": 0, //垂直居中
            },{
              "r": 0,
              "c": 8,
              "v": "24小时出量",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 0,
              "v": "日期",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 1,
              "v": "时间",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 2,
              "v": "体温(℃)",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 3,
              "v": "血压(mmHg)",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 4,
              "v": "脉搏(次/分))",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 5,
              "v": "食物名称",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 6,
              "v": "含水量(ml)",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 7,
              "v": "含钠量(g)",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 8,
              "v": "大便",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 9,
              "v": "尿量",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 10,
              "v": "呕吐物",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 11,
              "v": "备注",
              "ht": 0,
              "vt": 0,
            },{
              "r": 2,
              "c": 0,
              "v": "2022年4月13日",
              "ct": {
                "fa": `yyyy"年"M"月"d"日"`,
                "t": "d"
              },
              "m": "2022年4月13日",
              "ht": 0,
              "vt": 0,
            }
            ], //初始化使用的单元格数据
            "config": {
                "merge":{
                  "0_5": {
                    "r": 0,
                    "c": 5,
                    "rs": 1,
                    "cs": 3
                  },
                  "0_8": {
                    "r": 0,
                    "c": 8,
                    "rs": 1,
                    "cs": 3
                  }
                }, //合并单元格
                "rowlen":{

                }, //表格行高
                "columnlen":{}, //表格列宽
            }
          }
        ]
      }
      luckysheet.create(options)
      // console.log(luckysheetfile[i].data);
    })
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sheet {
  width: 1000px;
  height: 500px;
  overflow-x: scroll;
}
</style>

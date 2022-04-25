<template>
  <div>
    <button @click="save">保存数据</button>
    <div id="nurseSheet2" class="sheet"></div>
  </div>
</template>

<script>
import {careSheet} from '../sheetConfig/careSheet'
export default {
  name: 'nurseSheet2',
  data () {
    return {
      show:false
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
    setCell() {
      const luckysheet = window.luckysheet;
      luckysheet.setCellValue(3, 5, '哈哈哈');
    },
    init() {
      // const luckysheet = window.luckysheet;
      // luckysheet.setBothFrozen(false);
      // luckysheet.setVerticalFrozen(false);
      // luckysheet.setRangeShow({row:[0,0],column:[0,0]})
      // luckysheet.setBothFrozen(true,{ row_focus:2, column_focus:0 });
      luckysheet.setBothFrozen(false);
    }
  },
  mounted() {
    let that = this;
    $(function () {
      //配置项
      const options = {
        container: 'nurseSheet2', //luckysheet为容器id
        title: '护理记录表',
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
            // console.log(postion);
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
            // console.info('cellUpdateBefore',r,c,value,isRefresh)
            if(r=== 0 || r=== 1) return false
          },
          cellUpdated:function(r,c,oldValue, newValue, isRefresh){
            // console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
            console.log('hhhhhh');
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
            that.setCell();
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
              "c": 2,
              "v": "0:00",
              "ht": 0, //水平居中
              "vt": 0, //垂直居中
            },{
              "r": 0,
              "c": 3,
              "v": "1:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 4,
              "v": "2:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 5,
              "v": "3:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 6,
              "v": "4:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 7,
              "v": "5:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 8,
              "v": "6:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 9,
              "v": "7:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 10,
              "v": "8:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 11,
              "v": "9:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 12,
              "v": "10:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 13,
              "v": "11:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 14,
              "v": "12:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 15,
              "v": "13:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 16,
              "v": "14:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 17,
              "v": "15:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 18,
              "v": "16:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 19,
              "v": "17:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 20,
              "v": "18:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 21,
              "v": "19:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 22,
              "v": "20:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 23,
              "v": "21:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 24,
              "v": "22:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 0,
              "c": 25,
              "v": "23:00",
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 0,
              "v": "测量",
              "mc": { //合并单元格必备属性
                  "r": 1, //主单元格的行号
                  "c": 0, //主单元格的列号
                  "rs":5, //合并单元格占的行数
                  "cs": 1 //合并单元格占的列数
              },
              "ht": 0,
              "vt": 0,
            },{
              "r": 1,
              "c": 1,
              "v": "体温",
              "ht": 0,
              "vt": 0,
            },{
              "r": 2,
              "c": 0,
              "mc": {
                  "r": 1,
                  "c": 0,
              },
            },{
              "r": 2,
              "c": 1,
              "v": "血压",
              "ht": 0,
              "vt": 0,
            },{
              "r": 3,
              "c": 0,
              "mc": {
                  "r": 1,
                  "c": 0,
              },
            },{
              "r": 3,
              "c": 1,
              "v": "脉搏",
              "ht": 0,
              "vt": 0,
            },{
              "r": 4,
              "c": 0,
              "mc": {
                  "r": 1,
                  "c": 0,
              },
            },{
              "r": 4,
              "c": 1,
              "v": "血糖",
              "ht": 0,
              "vt": 0,
            },{
              "r": 5,
              "c": 0,
              "mc": {
                  "r": 1,
                  "c": 0,
              },
            },{
              "r": 5,
              "c": 1,
              "v": "血氧",
              "ht": 0,
              "vt": 0,
            },{
              "r": 6,
              "c": 0,
              "v": "饮食(克)5顿饭",
              "mc": { //合并单元格必备属性
                  "r": 6, //主单元格的行号
                  "c": 0, //主单元格的列号
                  "rs":3, //合并单元格占的行数
                  "cs": 1 //合并单元格占的列数
              },
              "ht": 0,
              "vt": 0,
            },{
              "r": 6,
              "c": 1,
              "v": "碳水:100-500克",
              "ht": 0,
              "vt": 0,
            },{
              "r": 7,
              "c": 0,
              "mc": {
                  "r": 6,
                  "c": 0,
              },
            },{
              "r": 7,
              "c": 1,
              "v": "蛋白质(早晚酸奶、蛋清)",
              "ht": 0,
              "vt": 0,
            },{
              "r": 8,
              "c": 0,
              "mc": {
                  "r": 6,
                  "c": 0,
              },
            },{
              "r": 8,
              "c": 1,
              "v": "维生素果蔬",
              "ht": 0,
              "vt": 0,
            },{
              "r": 9,
              "c": 0,
              "v": "出入量(ml)",
              "mc": { //合并单元格必备属性
                  "r": 9, //主单元格的行号
                  "c": 0, //主单元格的列号
                  "rs":3, //合并单元格占的行数
                  "cs": 1 //合并单元格占的列数
              },
              "ht": 0,
              "vt": 0,
            },{
              "r": 9,
              "c": 1,
              "v": "含水量",
              "ht": 0,
              "vt": 0,
            },{
              "r": 10,
              "c": 0,
              "mc": {
                  "r": 9,
                  "c": 0,
              },
            },{
              "r": 10,
              "c": 1,
              "v": "尿量",
              "ht": 0,
              "vt": 0,
            },{
              "r": 11,
              "c": 0,
              "mc": {
                  "r": 9,
                  "c": 0,
              },
            },{
              "r": 11,
              "c": 1,
              "v": "便量",
              "ht": 0,
              "vt": 0,
            },{
              "r": 12,
              "c": 0,
              "v": "运动",
              "mc": { //合并单元格必备属性
                  "r": 12, //主单元格的行号
                  "c": 0, //主单元格的列号
                  "rs":2, //合并单元格占的行数
                  "cs": 1 //合并单元格占的列数
              },
              "ht": 0,
              "vt": 0,
            },{
              "r": 12,
              "c": 1,
              "v": "站立",
              "ht": 0,
              "vt": 0,
            },{
              "r": 13,
              "c": 0,
              "mc": {
                  "r": 9,
                  "c": 0,
              },
            },{
              "r": 13,
              "c": 1,
              "v": "走路",
              "ht": 0,
              "vt": 0,
            },{
              "r": 14,
              "c": 0,
              "v": "娱乐",
              "ht": 0,
              "vt": 0,
            },{
              "r": 15,
              "c": 1,
              "v": "睡眠",
              "ht": 0,
              "vt": 0,
            },{
              "r": 16,
              "c": 1,
              "v": "吃药",
              "ht": 0,
              "vt": 0,
            },{
              "r": 17,
              "c": 1,
              "v": "保健",
              "ht": 0,
              "vt": 0,
            },
            ], //初始化使用的单元格数据
            "config": {
                "merge":{
                  "1_0": {
                      "r": 1,
                      "c": 0,
                      "rs": 5,
                      "cs": 1
                  },
                  "6_0": {
                    "r": 6,
                    "c": 0,
                    "rs": 3,
                    "cs": 1
                  },
                  "9_0": {
                    "r": 9,
                    "c": 0,
                    "rs": 3,
                    "cs": 1
                  },
                  "12_0": {
                    "r": 12,
                    "c": 0,
                    "rs": 2,
                    "cs": 1
                  },
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

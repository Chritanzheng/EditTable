<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    border
    :span-method="arraySpanMethod"
  >
    <el-table-column
      v-for="(column,index) in currentColumns"
      :key="column.label"
      :label="column.label"
      :prop="column.prop"
      :align="column.align"
      :fixed="column.fixed"
      width="180">
      <template slot-scope="scope">
        <div
          class="cellI"
          :style="`
            height:${cellHeight}px;
            line-height:${cellHeight}px;
            font-size:${fontSize}px`" @click="clickCell(scope.$index,index,column.prop)">
          {{scope.row[column.prop]}}
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import CellExpand from './CellExpand.vue'
  export default {
    name:"editTable",
    components: {
      CellExpand
    },
    data() {
      return {
        currentColumns: [
          {
            label: '第一列',
            prop: 'col_1',
            align: 'center',
            fixed: 'left',
            render:() => {}
          },
          {
            label: '第二列',
            prop: 'col_2',
            align: 'center',
            fixed: 'left',
            render:() => {}
          },
          {
            label: '第三列',
            prop: 'col_3',
            align: 'center',
            render:() => {}
          },
          {
            label: '第四列',
            prop: 'col_4',
            align: 'center',
            render:() => {}
          },
          {
            label: '第五列',
            prop: 'col_5',
            align: 'center',
            render:() => {}
          },
          {
            label: '第六列',
            prop: 'col_5',
            align: 'center',
            render:() => {}
          },
          {
            label: '第七列',
            prop: 'col_5',
            align: 'center',
            render:() => {}
          },
        ],
        tableData: [
          {
            col_1: '1-1',
            col_2: '1-2',
            col_3: '1-3',
            col_4: '1-4',
            col_5: '1-5'
          },
          {
            col_1: '2-1',
            col_2: '2-2',
            col_3: '2-3',
            col_4: '2-4',
            col_5: '2-5'
          },
          {
            col_1: '3-1',
            col_2: '3-2',
            col_3: '3-3',
            col_4: '3-4',
            col_5: '3-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
          {
            col_1: '4-1',
            col_2: '4-2',
            col_3: '',
            col_4: '4-4',
            col_5: '4-5'
          },
        ],
        cellHeight: 30,
        fontSize: 20
      }
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if(columnIndex === 0) {
          if(rowIndex === 1) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else if(rowIndex === 2){
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      clickCell(rowIndex,columnIndex,columnProp) {
        console.log('row:',rowIndex,' column:',columnIndex,' columnProp:',columnProp);
        const value = this.getCellValue(rowIndex,columnProp);
        console.log('value:',value);
      },
      getCellValue(row,column) {
        return this.tableData[row][column]
      }
    }
  }

</script>

<style scoped>
.cellI {
  text-align: center;
  vertical-align: middle;
}
</style>
<template>
    <div>
        <textarea v-model="dataValue" name="aa" id="aa" cols="30" rows="10" label="입력">
            기본글
        </textarea>
        <button @click="addList">submit</button>

        <br /><br />

        <ul>
            <!-- {{listData}} -->
            <li class="lis" v-for="(data, idx) in listData" :key="idx" :class="{ active:!data.status, nones:data.status }">
             
                    {{ data.id }} <br /> 
                    <div v-show="!data.update">
                        {{ data.conts }} <br /><br />
                    </div>
                    <div v-show="data.update">
                        <textarea v-model="data.updateTxt" cols="15" rows="5" label="입력"></textarea>
                    </div>

                    <button @click="statusChange($event, data.id)">상태변경</button>
                    <button @click="handleUpdate($event, data.id)">수정</button>
                    <button @click="handleDel($event, data.id)">삭제</button><br /><br />
                    <div v-show="data.status" class="yesyes">완료</div>
                    <div v-show="!data.status" class="nono">비완료</div>
               
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ListAdd",
    components: {
        
    },

    data() {
        return {
            listData: [],
            n: 0,
            dataValue: null,
            dataUpdate: null,
        }
    },

    methods: {
        addList() {
           if(this.dataValue === null) { 
               alert('말을 쳐야지');
            } else {
                this.listData = this.listData.concat({id: this.n, conts: this.dataValue, status: false, update: false, updateTxt: this.dataValue,})
                this.n++
                this.dataValue = null;
                
                console.log(this.dataValue)
            }
        },

        statusChange(e, id) {
            // this.listData[id].status = !this.listData[id].status 잘못된 소스
            let idx = this.listData.filter(val => val.id === id);
            // console.log(idx)
            idx[0].status = !idx[0].status;
        },

        handleDel(e, id) {
            
            const conf = confirm('삭제?')

            if(conf) {
                // this.listData = this.listData.slice(id, id+1)
                this.listData = this.listData.filter(val => val.id !== id)
                console.log(this.listData)
                // console.log(id)
            } else {
                return false;
            }
            
            
        }, 

        handleUpdate(e, id) {
            let item = this.listData.filter(val => val.id === id);
            // this.dataUpdate = this.dataValue
            item[0].update = !item[0].update;
            item[0].conts = item[0].updateTxt
            console.log(id)
        }


    }



}
</script>


<style scoped>
   *{ box-sizing: border-box; margin: 0; padding: 0; word-break: break-all;}
    html, body {width: 100%; height: 100%;}
    ol, ul {list-style: none;}
    ul {display: flex; flex-wrap: wrap;}
    .lis {flex: 0 1 auto; width: calc(25% - 10px); padding: 10px; margin: 5px; border: 1px solid #eee; ;}
    .lis.nones {background: rgb(214, 214, 214); color: rgb(138, 138, 138); border: 1px solid #555;}
</style>
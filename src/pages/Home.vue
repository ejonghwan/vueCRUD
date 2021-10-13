<template>
    <div>
        <h1>Home</h1>
        <div>d1: {{d1}}</div><br />

        aa: <div>{{aa}}</div>
        <input v-model="model" />
        <button @click="clickA">clickA</button>

        <br /><br />
        <form action="">
            <select name="" id="" v-model="arrDefault" @change="changeCombo">
                <option :value="data.title" :key="idx" v-for="(data, idx) in arr">{{data.conts}}</option>
            </select>
        </form>

        <br /><br />
        model: {{model}}

        <br /><br />
        <table v-if="tableShow"> 
            <!-- v-if="tableShow" v-show="tableShow" show는 논블록 if는 돔 삭제 -->
            <caption>asd</caption>
            <thead>
                <tr>
                    <th :key="idx" v-for="(data, idx) in arr">{{data.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td :key="idx" v-for="(data, idx) in arr">{{data.conts}}</td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Home",
        components: {

        },

      

        // data
        data: function() {
            return {
                d1: 'd1',
                d2: 'd2',
                d3: 'd3',
                model: 'hoho4',
                aa: '',
                arr: [
                    {title: 'aaa1', conts: 'hhhhhh11'},
                    {title: 'aaa2', conts: 'hhhhhh22'},
                    {title: 'aaa3', conts: 'hhhhhh33'},
                ],
                arrDefault: 'aaa2',
                tableShow: false,
            }
        },

        // method
        methods: {
            clickA: function() {
                this.aa = this.model
                this.d1 = this.arrDefault
            },

            changeCombo: function() {
                console.log(this.arrDefault)

                if(this.arrDefault === "aaa2") {
                    this.tableShow = false
                } else {
                    this.tableShow = true
                }
                
            }
            
        },

        //lifecycle
        beforeCreate: function() {
            console.log('beforeCreate')
            // 인스턴스가 초기화 된 직후, 데이터 관찰 및 이벤트/감시자(watcher) 설정 전에 동기적으로 호출됩니다.
        },

        created: function() {
            console.log('created. 특정 데이터 감시 / 렌더링 / 바인딩되는 데이터들 이때 셋팅')
            //인스턴스가 생성된 후 동기적으로 호출됩니다. 이 단계에서 인스턴스는 data 관찰, computed 속성, methods, watch/이벤트 콜백 등의 설정이 준비되었음을 의미하는 옵션 처리를 완료합니다. 그러나 마운트 단계가 시작되지 않았으며, $el 속성을 사용할 수 없습니다.
            
        },

        beforeMount: function() {
            console.log('beforeMount 돔에 마운트 되기전')
            //마운트가 시작되기 직전에 호출됩니다. render 함수가 처음으로 호출됩니다..이 훅은 서버측 렌더링 중 호출되지 않습니
        },

        mounted: function() {
            console.log('mounted 콜백 전')
            this.$nextTick(function() {
                console.log('mounted 콜백. 돔에 마운트 되고 나서')
            })
            
            //인스턴스가 마운트된 후 호출되며, 여기서 Vue.createApp({}).mount()로 전달된 엘리먼트는 새로 생성된 vm.$el로 대체됩니다. 루트 인스턴스가 문서 내의 엘리먼트에 마운트되어 있으면, mounted가 호출될 때 vm.$el도 문서에 포함(in-document)됩니다.

            //mounted는 모든 자식 컴포넌트가 마운트되었음을 보장하지 않습니다. 전체 화면내용이 렌더링될 때까지 기다리려면, mounted 내에서 vm.$nextTick를 사용합니다:
        },

        activated: function() {
            console.log('activated')
            //keep-alive 컴포넌트가 활성화될 때 호출됩니다...이 훅은 서버측 렌더링 중 호출되지 않습니
        },

        deactivated: function() {
            console.log('deactivated')
            //keep-alive 컴포넌트가 비활성화될 때 호출됩니다...이 훅은 서버측 렌더링 중 호출되지 않습니
        },

        beforeUnmount: function() {
            console.log('beforeUnmount 데이터가 변경되었을때 데이터 변경반영 전')
            //컴포넌트 인스턴스가 마운트 해제(unmounted) 되기 직전에 호출됩니다. 이 단계에서 인스턴스는 여전히 완전하게 작동합니다...이 훅은 서버측 렌더링 중 호출되지 않습니
        },

        unmounted: function() {
            console.log('unmounted 데이터가 변경되었을때 데이터 변경반영 후')
            //컴포넌트 인스턴스가 마운트 해제(unmounted)된 후 호출됩니다. 이 훅이 호출되면, 컴포넌트 인스턴스의 모든 디렉티브가 바인딩 해제되고, 모든 이벤트 리스너가 제거되며, 모든 자식 컴포넌트 컴포넌트도 마운트 해제(unmounted)됩니다...이 훅은 서버측 렌더링 중 호출되지 않습니
        },






        


    }
</script>


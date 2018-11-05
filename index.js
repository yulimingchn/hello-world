var app = new Vue({
    el:'#app',
    data:{
        arr:[],
        list:[
            {
                id:1,
                name : 'iphone 7',
                price : 6188,
                count: 1
            },
            {
                id:2,
                name : 'ipad pro',
                price : 5888,
                count: 1
            },
            {
                id:3,
                name : 'MacBook Pro',
                price : 21488,
                count: 1
            }
        ],
        checked:[],
        checkall:false
    },
    computed : {
        totalPrice : function(){
            var total = 0;
            for (var i=0;i <this.list.length;i++){
                var item = this.list[i];
                for(var j=0;j<this.checked.length;j++){
                    if(item.id === this.checked[j]){
                        total += item.price * item.count;
                    }
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
            handleReduce : function(index){
                    if (this.list[index].count ===1 ) return;
                    this.list[index].count--;                
                },
            handleAdd : function(index){
                    this.list[index].count ++ ;
            },
            handleRemove : function (index){ 
                this.list.splice(index,1);
            },
            checkAll : function(){
                var _this = this;
                if(this.checkall){
                    //实现反选
                    this.checked=[];
                } else {
                    //实现全选
                    this.checked = [];
                    this.list.forEach(function (item) {
                        _this.checked.push(item.id);
                    });
                }
                if(this.checked.length === this.list.length){
                    this.checkall = true;
                }
            }
    }
});
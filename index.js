var app = new VTTCue({
    el:'#app',
    data:{
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
        ]
    },
    computed : {
        totalPrice : function(){
            var total = 0;
            for (var i=0;i <this.list.length;i++){
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString.replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{

    }
});
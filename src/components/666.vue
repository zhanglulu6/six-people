<template>
    <button @click="djs" :disabled:"disabled">{{yzm}}</button>
</template>
<script>
exprot default{
    data(){
        return{
            yzm:'获取验证码',
            disabled:false,
            time:60        
        }    
    },
    methods:{
        //点击获取验证码之后的倒计时
        djs() {
          get_code({ username: this.phone }).then((res) => {  //调用接口
            if (res.code == 200) {
              this.time = 60;
              this.timer();
            } else {
              this.$Message.error({
                background: true,
                content: res.msg,
              });
            }
          });
        },
        timer() {
          if (this.time > 0) {
            this.disabled = true;
            this.time--;
            this.yzm = this.time + "秒";
            setTimeout(this.timer, 1000);
          } else {
            this.time = 0;
            this.yzm = "发送验证码";
            this.disabled = false;
          }
        },    
    }
}
</script>
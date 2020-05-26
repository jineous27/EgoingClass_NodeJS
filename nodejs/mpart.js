var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M;
//이게 무슨뜻이냐? 우리가 만든 모듈에,, 이 M이라는 객체를 이 모듈 바깥에서 사용할 수 있도록 내보내겠다는 기능

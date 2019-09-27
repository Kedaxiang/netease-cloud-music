<template>
  <div class="header">
    <div class="left">
      <img src="~assets/img/logo.png" alt="" class="logo">
      <div class="header-button">
        <span class="history-button"><i class="el-icon-arrow-left arrow"></i></span>
        <span class="history-button"><i class="el-icon-arrow-right arrow"></i></span>
      </div>
      <div class="input">
        <el-input suffix-icon="el-icon-search"
                  placeholder="搜索音乐、视频、歌词、电台"
                  v-model="input"></el-input>
      </div>
    </div>
    <div class="right">
      <div class="login">
        <img src="~assets/img/user.png" alt="">  
        <span>未登录</span>
        <div class="triangle"></div>
        <span>开通VIP</span>
      </div>
      <img src="~assets/img/skin.png" alt="" class="skin">
      <img src="~assets/img/email.png" alt="" class="email">
      <img src="~assets/img/set.png" alt="" class="set">
      <img src="~assets/img/mini.png" alt="" class="interaction">
      <img src="~assets/img/hide.png" alt="" class="interaction">
      <img src="~assets/img/shrink.png" alt="" class="interaction">
      <img src="~assets/img/close.png" alt="" class="close">
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less" scoped> 
  .header {
    background-color: #c62f2f;
    top: 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      margin-left: 20px;
      .logo {
        height: 25px;
      }
      .header-button {
        border: 1px solid #a72727; 
        height: 25px;
        margin-left: 80px;
        .history-button {
          width: 32px;
          height: 100%;
          display: inline-block;
          line-height: 27px;
          text-align: center;
          &:first-child {
            border-right: 1px solid #a72727;
          }
          .arrow {
            color: #d15858;
          }  
        }      
      }
      .input {
        margin-left: 14px;
      }
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      .login {
        display: flex;
        align-items: center;
        img {
          height: 30px;
          width: 30px;
        }
        span {
          font-size: 13px;
          color: #eec1c1;
          padding-left: 5px;
        }
        .triangle {
          width: 0;
          height: 0;
          border-top: 5px solid #eec1c1;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          margin: 0 11px;
        }
      }
      .skin {
        width: 20px;
        height: 18px;
        margin-left: 16px;
      }
      .email {
        width: 20px;
        height: 16;
        margin: 0 22px;
      }
      .set {
        width: 20px;
        height: 20px;
        padding-right: 21px;
        border-right: 1px solid #a82828;
      }
      .interaction {
        width: 20px;
        height: 20px;
        margin-left: 20px;
      }
      .close {
        width: 20px;
        height: 20px;
        margin: 0 20px;
      }
    }
  }
</style>

<style lang="less">
    input::-webkit-input-placeholder {
      color: #c0c4cc;
    }
  .el-input__inner {
    height: 25px;
    width: 270px;
    outline: none;
    border-radius: 10px;
    background-color: #a82828;
    border-color: #a82828;
    color: #fff;
    font-size: 14px;
    &:focus {
      border-color: transparent;
      .el-icon-search {
        color: #fff;
      }
    }
    &:hover {
      border-color: transparent
    }
  }

  .el-input__icon {
    line-height: 25px;
    height: 25px;
  }
</style>
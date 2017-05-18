<template>
  <div class="inputbox">
    <h4>Count is {{ getCount }}</h4>
    <br>
    <input type="text" name="" :value="getCount" @input="updateMessage">
    <hr/>
    <div class="cb-container">
              <input type="checkbox" id="checkbox">
              <label for="checkbox" class="cb-label"></label>
            </div>

            <div class="input-container">
      <input type="input" id="input" placeholder="请输入内容">
      <label for="input">请输入内容</label>
      <div class="bottom-line"></div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    data () {
      return {
        data: {
          username: '',
          age: 0
        }
      }
    },
    computed: {
      ...mapState({
        age: 'count'
      }),
      ...mapGetters([
        'getCount'
      ])
    },
    methods: {
      ...mapActions([
        'updateMessage'
      ])
    }
  }
</script>

<style lang="scss">
.inputbox {
  background-color: #ffffff;
  padding: 10px;
}

/* checkbox 框样式修改 */
$checked-color: #fff;
$checked-bg:rgb(101,141,181);
$unchecked-color: #cfcece;
$unchecked-bg:rgb(249,249,249);
$checkbox-height: 100px;
$background-color:#fff;
$font-color:#dcdcdc;
$duration: .4s;
.cb-container{
  text-align: center;
  padding-top: 50px;
}

html, body{
  padding: 0;
  margin: 0;
  background-color: $background-color;
  /*color:$font-color;*/
  font-family: 'Open Sans';
}
#checkbox{
  display:none;
}

.cb-label{
  height: $checkbox-height;
  width: $checkbox-height;
  background: $unchecked-bg;
  border: $checkbox-height * .1 solid $unchecked-color;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  transition: border-color ease $duration/2;
  -moz-transition: border-color ease $duration/2;
  -o-transition: border-color ease $duration/2;
  -webkit-transition: border-color ease $duration/2;
  cursor: pointer;
  &::before,&::after{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: $checkbox-height * 0.2;
    background: $checked-color;
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    content: '';
    -webkit-transition: opacity ease 0.5s;
    -moz-transition: opacity ease 0.5s;
    transition: opacity ease 0.5s;
  }
  &::before{
    top:$checkbox-height * 0.76;
    left: $checkbox-height * 0.31;
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  &::after {
    top: $checkbox-height * .45;
    left: $checkbox-height * 0;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
input[type=checkbox]:checked + .cb-label,
.cb-label.checked{

  background: $checked-bg;
  border-color:$checked-bg;
  &::after{
    border-color:$checked-color;
    height: $checkbox-height * .35;
    -moz-animation: dothabottomcheck $duration/2 ease 0s forwards;
    -o-animation: dothabottomcheck $duration/2 ease 0s forwards;
    -webkit-animation: dothabottomcheck $duration/2 ease 0s forwards;
    animation: dothabottomcheck $duration/2 ease 0s forwards;
  }

  &::before{
    border-color:$checked-color;
    height: $checkbox-height * 1;
    -moz-animation: dothatopcheck $duration ease 0s forwards;
    -o-animation: dothatopcheck $duration ease 0s forwards;
    -webkit-animation: dothatopcheck $duration ease 0s forwards;
    animation: dothatopcheck $duration ease 0s forwards;
  }

}
@-moz-keyframes dothabottomcheck{
  0% { height: 0; }
  100% { height: $checkbox-height *0.35; }
}

@-webkit-keyframes dothabottomcheck{
  0% { height: 0; }
  100% { height: $checkbox-height *0.35; }
}

@keyframes dothabottomcheck{
  0% { height: 0; }
  100% { height: $checkbox-height *0.35;  }
}

@keyframes dothatopcheck{
  0% { height: 0; }
  50% { height: 0; }
  100% { height: $checkbox-height * 0.7; }
}
@-webkit-keyframes dothatopcheck{
  0% { height: 0; }
  50% { height: 0; }
  100% { height: $checkbox-height * 0.7; }
}
@-moz-keyframes dothatopcheck{
  0% { height: 0; }
  50% { height: 0; }
  100% { height: $checkbox-height * 0.7; }
}


/* 输入框样式修改 */
$width: 500px;
$label-font-color: #3f4f5b;
$label-focus-font-color: rgb(82, 97, 108);
$border-bottom-color: #d5d5d5;
$focus-border-color: rgb(101, 141, 181);
$transform-top: 10px;
$transform-time: 0.3s;
$scale: 0.9;

.input-container {
  width: $width;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-flow: column-reverse;
  flex-flow: column-reverse;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 100px auto
}

.input-container input {
  -webkit-box-ordinal-group: 11;
  order: 10;
  -ms-flex-order: 10;
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  border-bottom: 1px solid $border-bottom-color;
  text-indent: 10px;
}

.input-container input::-moz-placeholder {
  opacity: 0;
}

.input-container input::-webkit-input-placeholder {
  opacity: 0;
}

.input-container input:-ms-input-placeholder {
  opacity: 0;
}

.input-container input, .input-container label {
  transition: all $transform-time;
}

.input-container label {
  -webkit-box-ordinal-group: 101;
  -ms-flex-order: 100;
  order: 100;
  color: $label-font-color;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
  -webkit-transform: translate(10px, 40px);
  transform: translate(0px, 40px);
}

.input-container .bottom-line {
  order: 2;
  width: 0;
  height: 2px;
  background: $focus-border-color;
  transition: all $transform-time;
}

.input-container input:focus {
  border-bottom-color: #fff;
}

.input-container input:focus ~ div, .input-container input:not(:placeholder-shown) ~ div {
  width: 100%
}

.input-container input:focus + label, .input-container input:not(:placeholder-shown) + label {
  color: $label-focus-font-color;
  -webkit-transform: translate(10px) scale($scale);
  transform: translate(10px) scale($scale)
}
</style>
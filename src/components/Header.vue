<template>
    <div class="headBack">
        <div class="container">
            <div class="headBox">
                  <span class="logoImg" >
                      <img src="../assets/img/logoHead.png" alt="" class="fitImg">
                  </span>
                  <ul >
                      <li >
                          <router-link to="/"  :class="$route.name=='Home'?'active':''">首页</router-link>
                      </li>
                      <li>
                          <router-link to="/Foodlist" :class="$route.name=='Foodlist'?'active':''">菜谱</router-link>
                      </li>
                      <li >
                          <router-link to="/Select" @mouseover.native="hoverFun" @mouseout.native="leaveFun" :class="$route.name=='Select'?'active':''" >分类 <i :class="isOpen?'el-icon-caret-top':'el-icon-caret-bottom'"></i></router-link>
                          <div :class="isOpen?'selectBoxShow show':'selectBoxShow'"  @mouseover="hoverFun" @mouseout="leaveFun" >
                              <el-row  class="selectBox" :gutter="10" v-for="(item, index) in headclassList" :key="item.id" v-if="index<=3" >
                                  <el-col :span="6" class="smalltitle" >
                                      {{item.class_name}}
                                  </el-col>
                                  <el-col :span="18">
                                      <el-row :gutter="10">
                                          <el-col :span="8" v-for="ditem in item.class_names" :key="ditem.id">
                                              <router-link  :to="{name: 'Foodlist', params: {classId: ditem.id}}" >{{ditem.class_name}}</router-link>
                                          </el-col>
                                      </el-row>
                                  </el-col>
                              </el-row>
                              <div class="selectMore">
                                  <router-link to="/Select">查看更多</router-link>
                              </div>
                          </div>
                      </li>
                      <li>
                          <router-link to="/Hotnews" :class="$route.name=='Hotnews'?'active':''">热门文章</router-link>
                      </li>
                      <li class="noPadSearch">
                          <div class="searchBox">
                              <el-row class="demo-autocomplete">
                                  <el-col >
                                    <el-autocomplete
                                      class="inline-input"
                                      popper-class="my-autocomplete"
                                      v-model="state"
                                      :fetch-suggestions="querySearch"
                                      placeholder="请输入内容"
                                      :clearable="true"
                                      @keyup.enter.native="handlesearchSelect"
                                      @clear="handlesearchSelect"
                                      @select="handlesearchSelect">
                                      <!-- <i
                                        class="el-icon-search el-input__icon"
                                        slot="suffix"
                                        @click="handlesearchSelect">
                                      </i> -->
                                    </el-autocomplete>
                                  </el-col>
                                </el-row>
                          </div>
                      </li>
                  </ul>
                </div>
            <div class="mobileBox">
              <div class="logoBox">
                  <img src="../assets/img/logoHead.png" alt="" />
              </div>
              <div class="hideMenu">
                  <i @click="clickMenu" class="el-icon-menu"></i>
                  <ul :class="pMenu?'pshow':''">
                      <li >
                          <router-link to="/" :class="$route.name=='Home'?'active':''">首页</router-link>
                      </li>
                      <li>
                          <router-link to="/Foodlist" :class="$route.name=='Foodlist'?'active':''">菜谱</router-link>
                      </li>
                      <li >
                          <router-link to="/Select" :class="$route.name=='Select'?'active':''">分类</router-link>
                      </li>
                      <li>
                          <router-link to="/Hotnews" :class="$route.name=='Hotnews'?'active':''">热门文章</router-link>
                      </li>
                  </ul>
                  <div class="searchBox">
                      <el-row class="demo-autocomplete">
                          <el-col >
                            <el-autocomplete
                              class="inline-input"
                              popper-class="my-autocomplete"
                              v-model="state"
                              :fetch-suggestions="querySearch"
                              placeholder="请输入内容"
                              clearable
                              @keyup.enter.native="handlesearchSelect"
                              :clear="handlesearchSelect"
                              @select="handlesearchSelect">
                              <i
                                class="el-icon-search el-input__icon"
                                slot="suffix"
                                @click="handlesearchSelect">
                              </i>
                            </el-autocomplete>
                          </el-col>
                        </el-row>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import FoodApi from '@/networks/api'
export default {
  data () {
    // 选项 / 数据
    return {
      headclassList: "", // 分类列表
      restaurants: [],
      state: "",
      isCollapse: true,
      isOpen: false,
      path: "",
      pMenu: false
    }
  },
  methods: {
    // 事件处理器
    hoverFun: function () {
      // hover移入时 展示分类列表
      this.isOpen = true
    },
    leaveFun: function () {
      // 鼠标离开时 隐藏分类列表
      this.isOpen = false
    },
    clickMenu: function () {
      if (this.pMenu) {
        this.pMenu = false
      } else {
        this.pMenu = true
      }
    },
    querySearch (queryString, cb) {
      // 快速选择
      // console.log(queryString,cb,this.$router.query);
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据 
      cb(results)
    },
    createFilter (queryString) {
      return restaurant => {
        return restaurant.value.indexOf(queryString.toLowerCase()) === 0
      }
    },
    loadAll () {
      return [
        { value: "可乐鸡翅" },
        { value: "红烧肉" },
        { value: "冬瓜丸子汤" },
        { value: "鱼香肉丝" },
        { value: "麻辣香锅" },
        { value: "酸辣土豆丝" },
        { value: "排骨" },
        { value: "鱼" },
        { value: "面包" },
        { value: "凉菜" }
      ]
    },
    handlesearchSelect (item) {
      console.log(item.value);
      if (this.state != "" && this.state != undefined && this.state != null) {
        this.$router.push({ name: 'Foodlist', params: {keywords: this.state, classId: 0}})
      }
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  },
  async created () {
    // 生命周期函数
    try { 
      const response = await FoodApi.classList() 
      // console.log('======', response)
      if (response.data.code == 1001) {
        this.headclassList = response.data.data
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.headBack {
  width: 100%;
  background: #eef1f6;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.headBox a {
  color: #48576a;
}
.headBox .is-active {
  color: #a37011;
}

.headBox > ul {
  height: 60px;
  display: inline-block;
  /*font-size: 15px;*/
}
.headBox > ul li > a {
  display: inline-block;
  padding: 10px 20px;
}
.headBox > ul li {
  display: inline-block;
  /*padding:10px 20px;*/
  position: relative;
  border-bottom: 5px solid transparent;
}
.headBox > ul li:hover {
  border-bottom: 5px solid #a37011;
}
.headBox > ul li a.active {
  color: #a37011;
}
.headBox > ul li.noPadSearch:hover {
  border-bottom: 5px solid transparent;
}
.selectBoxShow {
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  padding: 0 5px;
  top: 110%;
  height: 0;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  z-index: 999;
  transition: all 0.3s ease-out;
}
.selectBoxShow a {
  color: #a37011;
}
.selectBoxShow.show {
  /*display: block;*/
  height: 375px;
}
.headBox > ul li.noPadSearch {
  padding: 0;
  top: 16px;
  margin-left: 30px;
}
.selectBox {
  border-bottom: 1px solid #f1f1f1;
  display: block;
  width: 390px;
  min-height: 70px;
  /*line-height: 150%;*/
  padding: 10px;
  cursor: default;
}
.selectBox a {
  display: inline-block;
  padding: 2px 4px;
  margin: 2px 0;
}
.selectBox a:hover {
  background-color: #a37011;
  color: #fff;
}
.selectMore {
  margin-left: -5px;
  margin-right: -5px;
  text-align: center;
  padding: 10px 0;
  background: #f1f1f1;
}
.selectMore:hover {
  background: #a37011;
  color: #fff;
}
.selectMore:hover a {
  color: #fff;
}
.logoImg {
  width: 160px;
  height: 50px;
  display: inline-block;
  padding: 5px 5px;
  vertical-align: top;
}
.logoImg img {
  width: 100%;
  height: 100%;
}
.el-input__suffix{
  cursor: pointer;
}
/*******移动端*******/
.mobileBox {
  position: relative;
  padding-bottom: 10px;
}
.mobileBox .logoBox {
  /*width:100%;*/
  height: 100px;
  text-align: center;
  /*margin-bottom:5px;*/
  /*padding:10px;*/
}
.mobileBox .logoBox img {
  height: 100%;
  width: auto;
}
.hideMenu {
  position: relative;
  width: 100%;
}
.hideMenu ul > li {
  /*width:100%;*/
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  padding: 10px;
}

.hideMenu ul > li a {
  color: #48576a;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.hideMenu ul > li a.active {
  color: #a37011;
}
.hideMenu ul {
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  box-sizing: border-box;
  z-index: 999;
  border: 1px solid #f1f1f1;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 8px 0 rgba(0, 0, 0, 0.04);
  display: none;
}

.hideMenu > i {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  font-size: 16px;
}
.mobileBox .searchBox {
  padding-left: 40px;
  width: 100%;
  box-sizing: border-box;
}
.mobileBox .searchBox .el-autocomplete {
  display: block;
}
.hideMenu ul.pshow {
  display: block;
  /*font-size: 0;*/
}

@media screen and (max-width: 766px) {
  .headBox {
    display: none;
  }
  .mobileBox {
    display: block;
  }
}
@media screen and (min-width: 767px) {
  .headBox {
    display: block;
  }
  .mobileBox {
    display: none;
  }
}
</style>

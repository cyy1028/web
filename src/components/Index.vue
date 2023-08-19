<template>
  <div class="content">
    <!-- 头部 -->
    <div class="header">
      <img class="banner" src="../assets/index/banner.png" alt="">
      <div class="logoTitle">
        <div class="logo">logo</div>
        <div class="title">字景数科</div>
      </div>
      <div class="intrduce">
        <div class="top">字景数科</div>
        <div class="bottom">市场的需求就是我们创新的动力</div>
      </div>
      <div class="system">
        <div class="block">
          <div class="name">地图驾驶舱</div>
          <div class="English">Map cockpit</div>
        </div>
        <div class="line"></div>
        <div class="block">
          <div class="name">后台管理系统</div>
          <div class="English">Background managemen</div>
        </div>
      </div>
    </div>
    <!-- 公司简介 -->
    <div class="companyIntrodution">
      <div class="introduce">
        <div class="title">字景数科</div>
        <div class="line"></div>
        <div class="intro">公司介绍</div>
        <div class="block">
          杭州字景数科电子有限公司位于杭州市未来科技城浙江数智引擎创新园内，紧邻西溪湿地，办公环境优雅，全面享受余杭产业政策。公司专业从事智能输配电产品的研发、生产、销售和服务，业务重点在三大领域：一、智能输配电及控制设备；二、智能仪器仪表；三、电子元器件。
          公司的核心是技术创新与服务，研发人员占比80%以上。大专、本科、硕士研究生梯级合理配置，充分发挥个人的想象力和创造力，保证所有产品均百分之百自主研发。
          公司秉承“市场的需求就是我们创新的动力”企业文化，为输配电行业安全、便捷、节能贡献自己的一份力量。
        </div>
        <div class="btngroup">
          <div class="btn">了解更多</div>
        </div>

      </div>
      <img class="img" src="../assets/index/gs.png" alt="">
    </div>
    <!-- 热门产品 -->
    <div class="main">
      <div class="title">热门产品</div>
      <div class="line"></div>
      <div class="flex">
        <div class="english">Popular products</div>
        <div class="more">
          <div class="font"><span>查看更多</span> <img src="../assets/index/arrow.png" alt=""> </div>
          <div class="textline"></div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="block" v-for="(item, i) in productList" :key="i">
        <div class="name">{{ item.name }}</div>
        <div class="type">{{ item.type }}</div>
        <div class="intro">{{ item.intro }} </div>
        <div class="flex">
          <div class="more"><span style="vertical-align: middle;">查看更多 ></span>
            <!-- <img style="vertical-align: middle;margin-left: 2px;margin-top: 1px;" src="../assets/index/jt5.png" alt=""> -->
          </div>
          <img class="img" :src="item.img" alt="">
        </div>
      </div>
    </div>
    <!-- 客户项目 -->
    <div class="main">
      <div class="title">客户项目</div>
      <div class="line"></div>
      <div class="flex">
        <div class="english">Customer project</div>
      </div>
    </div>
    <div class="project">
      <div class="block" v-for="(item, i) in projectList">
        <img class="img" :src="item.img" alt="">
        <div class="box">
          <div class="title">合作公司名称及其项目名称合作公</div>
          <div class="intro">项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容…</div>
          <div class="btn">阅读他们的案例 ></div>
        </div>
      </div>
    </div>
    <!-- 公司新闻 -->
    <div class="main">
      <div class="title"> 公司新闻</div>
      <div class="line"></div>
      <div class="flex">
        <div class="english">Company News</div>
        <div class="more">
          <div class="font"><span>查看更多</span> <img src="../assets/index/arrow.png" alt=""> </div>
          <div class="textline"></div>
        </div>
      </div>
    </div>
    <div class="newss">
      <div class="img">
        <img class="big" src="../assets/index/t13.png" alt="">
        <img class="small" src="../assets/index/bf.png" alt="">
      </div>
      <div class="block" >
        <!-- @mouseover="hover(i)" @mouseleave="hoverLeave()" -->
        <div class="flex" v-for="(item,i) in newsList" :key="i" >
          <div class="left">
            <div class="day">{{ item.day }}</div>
            <div class="year">2023</div>
          </div>
          <div class="right">
            <div class="title">董事长寄语标题</div>
            <div class="content">董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话…</div>
            <div class="lookDetail">
              <span class="font" style="vertical-align: middle;">查看详情</span>
              <img v-show="!item.hover" style="vertical-align: middle;margin-top: 2px;margin-left: 5px;" src="../assets/index/jt2.png" alt="">
              <img v-show="item.hover" style="vertical-align: middle;margin-top: 2px;margin-left: 5px;" src="../assets/index/jt1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import t1 from '../assets/index/t1.png';
import t2 from '../assets/index/t2.png';
import t3 from '../assets/index/t3.png';
import t4 from '../assets/index/t4.png';
import t5 from '../assets/index/t5.png';
import t6 from '../assets/index/t6.png';
import t7 from '../assets/index/t7.png';
import t8 from '../assets/index/t8.png';
import t9 from '../assets/index/t9.png';
import t10 from '../assets/index/t10.png';
import t11 from '../assets/index/t11.png';
export default {
  data() {
    return {
      // 热门产品
      productList: [
        { name: '电源采集模块', type: 'BXDAS-D', intro: 'RS485总线通讯接口,Modbus R', img: t1 },
        { name: '智能一体化控制柜', type: 'BXDAS', intro: '1、根据用户需求定制； 2、独立终端控制…', img: t2 },
        { name: '电源采集控制模块', type: 'BXDAS-D', intro: 'RS485总线通讯接口,Modbus RTU协议RS485…', img: t3 },
        { name: '电源采集控制模块', type: 'BXDAS-D', intro: '1、RS485总线通讯接口,Modbus RTU协议…', img: t4 },
        { name: '元机触屏', type: 'BXDAS-PT', intro: '对一体化箱(柜)内的数据进行计算和转换，将得…', img: t5 },
        { name: '照明控制模块', type: 'BXDAS-ZM', intro: '1、RS485总线通讯接口,Modbus RTU协议…', img: t6 },
        { name: '漏电控制模块', type: 'BXDAS-CZ', intro: '1、RS485总线通讯接口,Modbus RTU协议…', img: t7 },
        { name: '电动机控制模块', type: 'BXDAS-M', intro: '1、RS485总线通讯接口,Modbus RTU协议…', img: t8 },
      ],
      // 客户项目
      projectList: [
        { img: t9, name: '合作公司名称及其项目名称合作公司', intro: '项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容…' },
        { img: t10, name: '合作公司名称及其项目名称合作公司', intro: '项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容…' },
        { img: t11, name: '合作公司名称及其项目名称合作公司', intro: '项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容项目内容…' },
      ],
      // 公司新闻
      newsList: [
        { hover:false,day:'01-22',year:'2023', title: '董事长寄语标题', content: '董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话…' },
        { hover:false,day:'01-23',year:'2023',title: '董事长寄语标题', content: '董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话…' },
        { hover:false,day:'01-22',year:'2023',title: '董事长寄语标题', content: '董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话董事长寄语董事长说的话董事长说的话…' },
      ],
      // 新闻是否hover
      newsHover:false
    };
  },
  created() {

  },
  methods: {
    hover(i){
      this.newsList.forEach((item=>{
        item.hover = false;
        this.newsList[i].hover = true;
      }))
      
    },
    hoverLeave(){
      this.newsList.forEach((item=>{
        item.hover = false;
      }))
    }
  }
};
</script>
<style lang="scss" scoped>
// 头部
.header {
  width: 100%;
 
  color: #fff;
  position: relative;
  box-sizing: border-box;

  .banner {
    width: 100%;
    height: auto;
    // height: 600px;
  }

  .logoTitle {
    position: absolute;
    top: 20px;
    left: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .logo {
      color: #5DFFF1;
      font-size: 2.5vw;

    }

    .title {
      font-size: 2.03vw;

    }
  }

  .intrduce {
    width: 600px;
    position: absolute;
    top: 30%;
    left: 100px;
    cursor: pointer;

    .top {
      font-size: 5.1vw;
      font-family: FZLTTHK--GBK1-0, FZLTTHK--GBK1;
      font-weight: normal;
      color: #FFFFFF;
      letter-spacing: 3px;
      margin-bottom: 5px;
    }

    .bottom {
      font-size: 2.03vw;
    }
  }

  .system {
    width: 80%;
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10%;

    .line {
      width: 0.16vw;
      height: 50px;
      background: #FFFFFF;
      border-radius: 1px;
    }

    .block {
      width: 45%;
      text-align: center;
      font-size: 2.03vw;
      cursor: pointer;

      .English {
        color: #B3B3B3;
        font-size: 1.56vw;
      }
    }
  }
}

// 公司简介
.companyIntrodution {
  width: 80%;
  margin: 20px 10%;
  background-color: #F3F3F3;
  // height: 600px;
  display: flex;
  justify-content: space-between;

  .introduce {
    padding: 68px 120px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;

    .title {
      font-size: 1.98vw;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #272727;
      margin: 5px 0 10px 0;
    }

    .line {
      width: 2.5vw;
      height: 3px;
      background: #127BF2;
      border-radius: 2px;
    }

    .intro {
      font-size: 1.35vw;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #909090;
      margin: 10px 0;
    }

    .block {
      font-size: 0.83vw;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #909090;
      line-height: 25px;
    }

    .btn {
      // position: absolute;
      // bottom: 0px;
      width: 9.5vw;
      height: 42px;
      background: #127BF2;
      border-radius: 26px;
      margin-top: 30px;
      font-size: 1.03vw;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      text-align: center;
      line-height: 42px;
    }
  }

  img {
    width: 50%;
    // height: 400px;
    margin-right: -10%;
  }
}

.main {
  width: 80%;
  margin: 40px 10% 20px;

  .title {
    font-size: 1.67vw;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #272727;
    cursor: pointer;
  }

  .line {
    width: 2.5vw;
    height: 3px;
    background: #127BF2;
    border-radius: 2px;
    margin: 5px 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;

    .english {
      font-size: 1.36vw;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #909090;
      cursor: pointer;
    }

    .more {
      .font {
        font-size: 1vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #127BF2;
        cursor: pointer;
        vertical-align: middle;
      }

      .textline {
        width: 5vw;
        height: 2px;
        background: #B7B7B7;
        margin-top: 5px;
      }
    }
  }
}

// 热门产品
.product {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 20px 10%;

  .block {
    width: 25%;
    padding: 20px 2.29vw;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #E7E7E7;
    cursor: pointer;

    .name {
      font-size: 1.15vw;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #565656;
    }

    .type {
      font-size: 1.04vw;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #565656;
      margin: 5px 0;
    }

    .intro {
      font-size: 0.73vw;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #AEAEAE;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 5px 0;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;

      .more {
        font-size: 0.94vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #565656;
        margin: 10px 0;
        width: 45%;
        white-space: nowrap;
      }

      .img {
        width: 50%;
      }
    }

  }

  .block:hover {
    background: #127BF2;

    .name,
    .type,
    .more {
      color: #fff;
    }

    .intro {
      color: #F5F5F5;
    }
  }
}

// 客户项目
.project {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px 10%;

  .block {
    width: 32%;
    box-shadow: 0px 2px 6px 0px rgba(219, 219, 219, 0.5);
    border: 1px solid #E7E7E7;

    img {
      width: 100%;
    }

    .box {
      text-align: center;
      padding: 15px 10px 10px;
      cursor: pointer;
      margin-top: -5px;

      .title {
        font-size: 1.2vw;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #565656;
      }

      .intro {
        text-align: left;
        font-size: 0.83vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #BBBBBB;
        margin: 15px 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden; //溢出内容隐藏
        text-overflow: ellipsis; //文本溢出部分用省略号表示
        display: -webkit-box; //特别显示模式
        -webkit-line-clamp: 3; //行数
        line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .btn {
        width: 80%;
        margin: 10px 10%;
        height: 42px;
        background: #127BF2;
        border-radius: 26px;
        color: #fff;
        line-height: 42px;
        font-size: 1.04vw;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
      }
    }

    .box:hover {
      background: #127BF2;

      .title {
        color: #ffffff;
      }

      .intro {
        color: #E7E7E7;
      }
    }
  }
}

// 公司新闻
.news {
  width: 80%;
  margin: 20px 10%;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  .img {
    position: relative;
    .big {
      width: 90%;
      height: 350px;
    }
    .small{
      width: 70px;
      height: 70px;
      position: absolute;
      top:calc(50% - 35px);
      left:calc(45% - 35px);
    }
  }
.block{
  .flex{
    border-bottom: solid 2px #CCCCCC;
    padding: 20px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      // width: 20%;
      border-right: solid 1px #D8D8D8;
      padding-right: 10px;
      box-sizing: border-box;
      .day{
        white-space: nowrap;
        font-size: 1.98vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
        cursor: pointer;
      }
      .year{
        text-align: right;
        font-size: 0.94vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #272727;
        cursor: pointer;
      }
    }
    .right{
      padding: 0 10px;
      box-sizing: border-box;
      .title{
        font-size: 0.94vw;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #3D3D3D;
        cursor: pointer;
      }
      .content{
        font-size: 0.83vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A0A0A0;
        margin: 5px 0;
        cursor: pointer;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden; //溢出内容隐藏
        text-overflow: ellipsis; //文本溢出部分用省略号表示
        display: -webkit-box; //特别显示模式
        -webkit-line-clamp: 2; //行数
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .lookDetail{
        text-align: right;
        cursor: pointer;
        span{
          font-size: 0.73vw;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #3D3D3D;
        }
        img{
          height: 0.73vw;
        }
      }
    }
  }
  .flex:hover{
    .title{
      color: #0262DC;
      font-weight: 500;
    }
   .lookDetail span{
    color: #0262DC;
   }
  }
}

}</style>

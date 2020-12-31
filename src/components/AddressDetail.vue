<template>
  <div class="address-detail">
    <!-- 目的地详情页的头部 -->
    <div class="detail-top-first">
      <div class="icon">
        <van-icon class="icon1" name="arrow-left" @click="onClickLeft" />
        <van-icon class="icon2" name="share-o" @click="onClickRight" />
      </div>
      <img src="../assets/beijing1.png" class="img-first" />
    </div>

    <!-- 头部变更 -->
    <van-sticky @scroll="changeScroll">
      <div v-if="done" class="detail-top-first11">
        <van-nav-bar title="[京韵京味·帝都漫游5日之旅] 故宫+长城+北京胡同+老舍茶馆" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
          <template #right>
            <van-icon name="share-o" size="18" />
          </template>
        </van-nav-bar>
      </div>
    </van-sticky>

    <!-- 点击图标出现的模态框 -->
    <van-popup v-model:show="show" class="detail-popup">
      <div>
        <p>分享微信好友</p>
        <p>分享微信朋友圈</p>
      </div>
    </van-popup>

    <!-- 标题 -->
    <div class="detail-top-second">
      <h3>[京韵京味·帝都漫游5日之旅] 故宫+长城+北京胡同+老舍茶馆</h3>
      <div class="second">
        <p><span>5</span>天</p>
        <span>1149人咨询过</span>
      </div>
    </div>

    <!-- 第三部分 -->
    <div class="detail-three">
      <p>
        <van-icon name="passed" color="#27d461" />
        <span>量身定制</span>
      </p>
      <p>
        <van-icon name="passed" color="#27d461" />
        <span>专车专导</span>
      </p>
      <p>
        <van-icon name="passed" color="#27d461" />
        <span>私家小团</span>
      </p>
    </div>

    <!-- 第四部分 -->
    <div class="detail-four">
      <h1>行程亮点</h1>
      <div class="detail-four-top">
        <li>
          <span>·</span>
          <p>品味千年帝都的古朴清幽,体验现代国际大都市的喧嚣繁华！</p>
        </li>
        <li>
          <span>·</span>
          <p>坐着三轮车逛胡同,感受老北京胡同的市井风情</p>
        </li>
        <li>
          <span>·</span>
          <p>漫步前门大删栏,逛百年老字号,品尝地道的老北京风味</p>
        </li>
      </div>
    </div>

    <!-- 第五部分 -->
    <div class="detail-five">
      <div class="detail-five-title">
        <h1>特色景点</h1>
        <div class="img1">
          <li v-for="item in detailBannerList" :key="item.title" @change="onChange(index)" @click="goToInfo">
            <img :src="item.src" />
            <h6>{{ item.title }}</h6>
            <div class="custom-indicator"><span>{{ current + 1 }}</span>/3</div>
          </li>
          <!-- <van-swipe :loop="false" :height="250" :width="240" class="img1">
            <van-swipe-item v-for="item in detailBannerList" :key="item.title" @change="onChange(index)" style="widtd:720px;height:220px;overflow:hidden">
              <img :src="item.src" style="width:220px;height:180px;" />
              <h6>{{ item.title }}</h6>
              <div class="custom-indicator"><span>{{ current + 1 }}</span>/3</div>
            </van-swipe-item>
          </van-swipe> -->
          <!-- <van-swipe @change="onChange(index)" :loop="false" :height="220">
            <van-swipe-item v-for="item in detailBannerList" :key="item.title">
              <img :src="item.src" />
              <h6>{{ item.title }}</h6>
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator"><span>{{ current + 1 }}</span>/3</div>
            </template>
          </van-swipe> -->
        </div>
      </div>
    </div>

    <!-- 第六部分 -->
    <div class="detail-six">
      <ul>
        <li class="detail-six-li">
          <!-- <img src="../assets/北京7.png" /> -->
          <van-icon name="comment-circle" color="#ccc" size="45" />
          <p>私密旅行</p>
          <span>只和家人朋友</span>
        </li>
        <li class="detail-six-li">
          <!-- <img src="../assets/北京6.png" /> -->
          <van-icon name="underway" color="#ccc" size="45" />
          <p>1对1顾问</p>
          <span>量身定制</span>
        </li>
        <li class="detail-six-li">
          <!-- <img src="../assets/北京5.png" /> -->
          <van-icon name="music" color="#ccc" size="45" />
          <p>7x24小时</p>
          <span>全程保障</span>
        </li>
      </ul>
    </div>
    
    <!-- 第7部分 -->
    <div class="detail-seven">
      <van-cell left title="行程详情">
        <template #right-icon>
          <van-switch v-model="checked" active-color="#27d461" size="24" @change="btnChange" />
        </template>
      </van-cell>
    </div>

    <!-- 第8部分 -->
    <div class="detail-eight">
      <van-collapse v-model="activeNames" @change="collapseChange">
        <van-collapse-item title="标题2" name="1" class="detail-top">
          <template #title>
            <div class="detail-top-first">
              <div>
                <p>1</p>
                <span>Day</span>
              </div>
              <h3>广州-北京</h3>
            </div>
          </template>
          <div class="detail-top-second">
            <div class="top11">
              <van-icon name="send-gift" color="red" />
              <div>
                <p>客人自行车乘坐交通工具抵达红尘滚滚的帝都,专业服务人员接机后前往指定酒店休息</p>
                <span>【温馨提示】:</span>
                <p class="text">1、本日只含接机用车+住宿,其他不含</p>
                <p class="text">2、暑期的北京,体感较热,建议做好防晒、多喝水</p>
              </div>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="2" class="detail-top">
          <template #title>
            <div class="detail-top-first">
              <div>
                <p>2</p>
                <span>Day</span>
              </div>
              <h3>北京</h3>
            </div>
          </template>
          <div class="detail-top-second">
            <div class="top11">
              <van-icon name="send-gift" color="red" />
              <div>
                <p class="text1">上午,睡到自然醒,之后前往浏览古代皇家祭天场所--【天坛】,站在天心石上小声说话但是听到三倍复现的声音,体验当时皇帝祭天高高在上的感觉;</p>
                <p class="text">下午参观云集中国5000年历史和最精华宝贝的顶级展览【国家博物馆】,品味一场古今完美结合的文化盛宴;</p>
                <p class="text2">晚上,欣赏一场中国真功夫,圆一个武林少年梦。</p>
                <span>[温馨提示]:</span>
                <p class="text">1、国家博物馆排队等待时间较长,请携带防暑解渴物品</p>
                <p class="text">2、红剧场功夫秀每天固定演出时间,目前是每天19点开演,请务必提前到达</p>
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>天坛</h2>
                <p>北京天坛位于北京市东城区，是明清两朝帝王祭天、祈谷和祈雨的场所。是现存中国古代规模最大、伦理等级最高的祭祀建筑群。1961年，天坛被中华人民共和国国务院公布为第一批全国重点文物保护单位之- -。1998年，“北京皇家祭坛一天坛”被列为世界文化遗产</p>
                <img src="../assets/beijing1.png" />
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>中国国家博物馆</h2>
                <p>中国国家博物馆位于北京市中心天安门广场东侧，东长安街南侧，与人民大会堂东西相对称，是历史与艺术并重，集收藏、展览、研究、考古、公共教育、文化交流于一-体的综合性博物馆。总建筑面积近20万平方米，藏品数量为100余万件，是世界，上单体建筑面积最大的博物馆。博物馆分为五层，共有48个展厅，是中华文物收藏量最丰富的博物馆之一。陈展体系由基本陈列、专题陈列、国际交流展和临时展览组成，涵盖了从古到今的各个阶段。</p>
                <img src="../assets/beijing2.png" />
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>红剧场功夫秀</h2>
                <p>千百年来，在中国辽阔的大地.上，造化神奇的嵩山、华山、武当山，演绎了无数个中国功夫的传奇。在红剧场您将要看到的就是这无数传奇中的一个。故事发生在山上- -座古老的寺院内。一个小和尚从懵懂无知的童年，通过练武、习禅，最终走入大智大勇、大彻大悟的人生境界。</p>
                <img src="../assets/beijing3.png" />
              </div>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="3" class="detail-top">
          <template #title>
            <div class="detail-top-first">
              <div>
                <p>3</p>
                <span>Day</span>
              </div>
              <h3>北京</h3>
            </div>
          </template>
          <div class="detail-top-second">
            <div class="top11">
              <van-icon name="send-gift" color="red" />
              <div>
                <p class="text1">上午，前往游览世界 最大的中心广场- [天安门广场]，游览天安门广场、人民英雄纪念碑、人民大会堂外景，随后游览世界上规模最大、保存最完整的皇家宫殿建筑群一[故宫博物院]，从紫禁城起伏跌宕的建筑乐章中感受盛世皇朝的博大胸怀;</p>
                <p class="text2">下午前往[国子监]，参加汉服毛笔字体验,学习传统国学礼仪。</p>
                <span>[温馨提示]:</span>
                <p class="text">故宫博物院安检较为严格，请勿携带打火机。因故宫博物院面积较大，且新近开通了很多区域，徒步时间较长，建议穿着旅游鞋或厚底的鞋子，带水和干粮!</p>
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>天安门</h2>
                <p>世界_上最大的广场之一，位于长安街南侧，天安门位于北京城的传统的中轴线上，由城台和城楼两部分组成，造型威严庄重，气势宏大，是中国古代城门中最杰出的代表作，中华人民共和国的象征。天安门被中华人民共和国:二院公布为第-批全国重点文物保护单位之-。</p>
                <img src="../assets/beijing4.png" />
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>故宫</h2>
                <p>故宫又名紫禁城，是中国乃至世界.上保存最完整，规模最大的木质结构古建筑群，被誉为“世界五大宫之首”。内廷以乾清宫、交泰殿、坤宁宫后三宫为中心，以及东西两侧的东六宫和西六宫，是封建帝王与后妃居住之所，也就是俗称的“三宫六院”。故宫内珍藏有大量珍贵文物，据统计有上百万件，占全国文物总数的六分之一。钟表馆每天11点和14点有钟表演示，不可错过。故宫需要从南到北参观，午门是唯一-的入口，出口是东华门和神武门。</p>
                <img src="../assets/beijing1.png" />
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>国子监</h2>
                <p class="text1">北京国子监始建于元成宗大德十年( 1306年)，是中国元、明、清三代国家管理教育的最高行政机关和国家设立的最高学府。北京国子监坐落于安定门内国子监街上，与国子监一墙之隔的东侧是孔庙。</p>
                <p class="text2">明朝时期行使双京制，在南京和北京分别都设有国子监，设在南京的国子监被称为“南监"或“南雍”，而设在北京的国子监则被称为“北监”或“北雍”。</p>
                <img src="../assets/beijing2.png" />
              </div>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="4" class="detail-top">
          <template #title>
            <div class="detail-top-first">
              <div>
                <p>4</p>
                <span>Day</span>
              </div>
              <h3>北京</h3>
            </div>
          </template>
          <div class="detail-top-second">
            <div class="top11">
              <van-icon name="send-gift" color="red" />
              <div>
                <p class="text1">上午 游览北京皇家园林的典范“三山五园”之一[颐和园]，欣赏皇家园林建筑，感受“十里青山行画里，双飞白鸟似江南"的园林风光。</p>
                <p class="text">下午，前往中国最高学府[北京大学]和[清华大学]校内参观，(特别提示: 如校内有活动告示，则暂停前往改为市内其他区域自由活动)。</p>
                <p>晚餐推荐:大董烤鸭( 必须预定)</p>
                <p class="text1">注:大董菜品也稍贵，却是北京烤鸭餐首选餐厅，分店较多，可根据实际情况提前预定!</p>
                <span>[温馨提示]:北大和清华校园目前学生开学期间是暂停开放的，部分节日( 学生暑假和寒假时候开放)、 及因参观客流量较大，普通散客参观券无法满足市场需求，故特别从第三方购买参观票前往，参观票两校连游200元/张(无老人和儿童优惠票)敬请知悉! !</span>
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>颐和园</h2>
                <p>颐和园坐落于北京西郊，是中国古典园林之首，1998年12月2日被列入《世界遗产名录》。由万寿山和昆明湖组成，全园以西山群峰为背景，建筑群与山湖形势融为一体，景色变幻无穷。全园分3个区域，分别为以仁寿殿为中心的政治活动区;以玉澜堂、乐寿堂为主体的帝后生活区;以万寿山和昆明湖组成的风景旅游区。</p>
                <img src="../assets/beijing3.png" />
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>清华大学</h2>
                <p>清华大学始建于1911年，中国著名高等学府，坐落于北京西北郊风景秀丽的清华园。曾经是皇家园林，园中的建筑大多中西合璧，亭台楼榭与湖水树林相映，环境优美。园内的主要景点有近春园、水木清华、大礼堂、清华学堂、二校门等。可以从西门进入后顺时针参观。近春园的荷塘，就是朱自清《荷塘月色》中所描写的荷塘。</p>
                <img src="../assets/beijing4.png" />
              </div>
            </div>
            <div class="top11">
              <van-icon name="todo-list" color="blue" class="top22" />
              <div>
                <h2>北京大学</h2>
                <p>初名京师大学堂，是中国近代第一-所国立综合性大学，被公认为是中国的最高学府之- -。是中国“新文化运动”与“五四运动”等运动的发祥地，也是多种政治思潮和社会理想在中国的传播地。校园环境风景如画，既有皇家园林的宏伟气度，又有江南山水的秀丽特色。校园北与圆明园毗邻、西与颐和园相望，逛完校园可以再一并走完这里历史遗迹。</p>
                <img src="../assets/beijing1.png" />
              </div>
            </div>
          </div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="5" class="detail-top">
          <template #title>
            <div class="detail-top-first">
              <div>
                <p>5</p>
                <span>Day</span>
              </div>
              <h3>北京-广州</h3>
            </div>
          </template>
          <div class="detail-top-second">
            <div class="top11">
              <van-icon name="send-gift" color="red" />
              <div>
                <p>今日 乘机返回广州，根据返程时间安排送机，收拾好行囊，结束愉快的品味北京之旅。</p>
              </div>
            </div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>

    <!-- 第九部分 -->
    <div class="detail-nine">
      <h3>简单<span>3步</span></h3>
      <p>定制您的专属行程</p>
      <div class="detail-nine-top">
        <ul>
          <li>
            <van-icon name="bill-o" size="30" color="#27d461" />
            <p>5秒钟</p>
            <span>提交旅行需求</span>
          </li>
          <li>
            <van-icon name="smile-o" size="30" color="#27d461" />
            <p>10分钟</p>
            <span>顾问1对1沟通</span>
          </li>
          <li>
            <van-icon name="bill-o" size="30" color="#27d461" />
            <p>24小时</p>
            <span>发送行程方案</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 第十部分 -->
    <div class="detail-ten">
      <div class="detail-ten-top">
        <div>
          <van-icon name="phone-o" color="#27d461" />
          <span>通话</span>
        </div>
        <van-button icon="chat-o" type="primary" round color="#27d461" style="padding: 0 60px">免费咨询该行程</van-button>
      </div>
      <!-- <div class="detail-ten-top">
        <van-tabbar>
          <van-tabbar-item icon="phone-o">通话</van-tabbar-item>
        </van-tabbar>
        <van-button icon="chat-o" type="primary" round color="#27d461" style="padding: 0 60px">免费咨询该行程</van-button>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from "vue-router";
// import { useStore } from "vuex";
import { key } from "../store/index";
export default defineComponent ({
  data() {
    return {
      detailBannerList: [
        {
          src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-fo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F1c950a7b02087bf4143e605cf1d3572c10dfcfb0.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611740988&t=aa3329e79c01adf8aeb97cfb3ea1242f",
          title: "故宫"
        },
        {
          src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F6%2F5%2F0%2F2%2F6502993%2F20099%2F30%2F1254316838163_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611740988&t=a62faf9be32f3738793e10b610df4226",
          title: "三轮车"
        },
        {
          src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1502%2F19%2Fc36%2F3175188_1424360669131_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611740988&t=21eedd5eef1d1e8eec1d93fc1e53703d",
          title: "北京"
        }
      ],
      current: 0,
    }
  },
  methods: {
    onChange(i) {
      return this.current = i;
    },
  },
  setup() {
    // 模态框
    const show = ref(false);
    const onClickRight = () => {
      show.value = true;
    };
    
    // 按钮
    const checked = ref(true);
    // 控制面板
    const activeNames = ref(['1','2','3','4','5']);
    // 开关控制面板
    const btnChange = () => {
      if(checked.value === false) {
        activeNames.value = [];
      } else {
        activeNames.value = ['1','2','3','4','5'];
      }
    };
    const collapseChange = (activeNames) => {
      if(activeNames.length == 5) {
        checked.value = true;
      } else {
        checked.value = false;
      }
    };

    // 头部更换
    const done = ref(false);
    const changeScroll = (scrollTop) => {
      if(scrollTop.scrollTop > 200) {
        done.value = true;
      } else {
        done.value = false;
      }
    };

    // 跳转页面
    const router = useRouter();
    const onClickLeft = () => {
      router.go(-1);
    };
    const goToInfo = () => {
      router.push("/info");
    };

    return {
      onClickLeft,
      onClickRight,
      show,
      activeNames,
      checked,
      btnChange,
      collapseChange,
      done,
      changeScroll,
      goToInfo,
    };
  }
});
</script>
<style lang="stylus" scoped>
.address-detail
  position relative
  width 100%
  background #f7f7f7

  .detail-popup

    div
      width 100%
      height 100%
      padding 0 270px 0 20px

      p
        font-size 18px
        text-align left
      
  .detail-top-first
    
    .icon
      display flex
      justify-content space-between
      align-items center
      width 0
      height 0
      font-size 18px
      color #fff

      .icon1
        position absolute
        top 20px
        left 20px
      
      .icon2
        position absolute
        top 20px
        right 20px

    .img-first
      width 100%
      height 100%

  .detail-top-second
    padding 0 20px
    font-size 20px
    text-align left
    color black
    background white

    h3
      margin-top 0
      padding-top 20px
    
    .second
      display flex
      font-size 16px
      justify-content space-between

      p
        margin-top 0
        color #27d461

        span
          font-size 22px
    
  .detail-three
    display flex
    padding 0 20px
    justify-content space-around
    align-items center
    font-size 14px
    background #f7f7f7

    p
      display flex
      justify-content center
      align-items center

      span
        display block
        padding-left 3px

  .detail-four
    text-align left
    padding 0 20px
    color black
    background white

    h1
      margin-top 0
      padding-top 20px
      font-size 25px

    .detail-four-top

      li
        display flex
        align-items top
        font-size 16px
        list-style none

        span
          display block
          font-size 40px
          margin-top -10px

        p
          margin-top 0

  .detail-five
    padding 0px 0 0 20px
    width 94%
    background white
    
    .detail-five-title
      position relative

      h1
        text-align left
        padding-top 20px
        font-size 25px
        color black

      .img1
        display flex
        height 180px
        overflow auto

        li
          width 200px
          height 145px
          margin-right 20px
          list-style none
          border-radius 10px
          box-shadow 5px 5px 5px #ccc
          transition all 0.2s

          &:hover
            transform scaleY(0.8)
            border-radius 10px

          img
            width 200px
            height 110px
            border-radius 10px 10px 0 0

          h6
            margin 0
            padding-top 5px
            padding-bottom 10px
            font-size 16px
            color black

          .custom-indicator
            position absolute
            right 20px
            top 10px
            font-size 16px
            text-align center
            margin-top -5px
            padding 20px 20px 0 0

            span
              font-size 20px

  .detail-six
    padding 20px 0

    ul
      padding 0 20px
      display flex
      justify-content space-between
      align-items center

      .detail-six-li
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #ccc
        font-size 16px

        p
          margin-top 0
          margin-bottom 0

  .detail-seven
    background #fff
    color black

  .detail-eight
    .detail-top
      margin-bottom 10px
      .detail-top-first
        display flex
        div
          width 60px
          height 60px
          border-radius 50%
          text-align center
          background #27d461
          color #fff
          margin-top 20px

          p
            margin-bottom 0
            margin-top 0
            padding-top 10px
            font-size 20px

        h3
          line-height 47px
          margin-left 10px
          font-size 25px
      
      .detail-top-second
        padding 0

        .top11
          display flex

          .top22
            margin-top 27px

          div
            padding-left 8px
            font-size 16px

            .text
              margin 0

            .text1
              margin-bottom 0

            .text2
              margin-top 0

            img
              width 100%
              height 200px
              border-radius 10px

  .detail-nine
    padding-bottom 100px
    p
      margin-top 0
      font-size 18px

    h3
      margin-bottom 0
      font-weight 400

      span
        color #27d461

    .detail-nine-top
      ul
        display flex

        li
          flex 1

          p
            margin-bottom 0
            margin-top 0
            font-size 15px

          span
            display block
            font-size 14px
            margin-top -3px

  // 第二方案
  .detail-ten
    position fixed
    bottom 0
    left 0
    height 65px
    width 100%
    background #fff

    .detail-ten-top
      width 100%
      display flex
      align-items center
      padding  12px 20px

      div
        display flex
        flex-direction column
        padding-right 35px
        justify-content center
        align-items center
        font-size 15px  

        span
          font-size 15px
</style>


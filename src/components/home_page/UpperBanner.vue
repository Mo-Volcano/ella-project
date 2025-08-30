<template>
  <div class="banner">
    <div class="parent">
      <img src="@/assets/images/banner-bg.jpg" alt="" class="bg-img" />
      <div class="cont">
        <h3><span>Huge Saving</span> On UHD Televisions</h3>
        <p class="hint">Sale up to 70% off on selected items</p>
        <v-btn
          variant="outlined"
          height="50"
          width="160"
          density="compact"
          style="border-radius: 30px; text-transform: none"
        >
          Shop Now
        </v-btn>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  .parent {
    position: relative;
    height: 390px;
    overflow: hidden;

    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    .cont {
      position: relative;
      z-index: 1;
      color: white;
      top: 20px;
      left: 40px;
      padding: 40px 0 0 100px;
      width: 600px;

      h3 {
        font-weight: 900;
        font-size: 45px;
        span {
          color: rgb(45, 251, 223);
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
// media queries
@media (max-width: 990px) {
  .banner {
    .parent {
      .cont {
        width: 500px;
        left: 0;
        h3 {
          font-size: 35px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-left: 20px;
        width: 400px;
        left: 0;
        h3 {
          font-size: 30px;
        }
        .hint {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 580px) {
  .banner {
    .parent {
      height: 250px;
      .cont {
        padding-left: 20px;
        padding-top: 20px;
        width: 80%;
        left: 0;
        h3 {
          font-size: 24px;
        }
        .hint {
          font-size: 12px;
        }
        button {
          height: 30px !important;
          font-size: 11px !important;
          width: 130px !important;
        }
      }
    }
  }
}
</style>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mt-4">
    <div class="row">
      <div class="col-md-6">
        <div class="contianerElectric">
          <div class="paddingInside">
            <div class="title">KINGSONG S18</div>
            <div class="description mt-2">
              Electric Unicycle with<br />
              air damping suspension
            </div>
            <div class="priceContainer">
              <typography class="delPrice">$1399.00</typography><br />
              <typography class="price">$1099.00</typography>
            </div>
            <div class="mt-2">
              <button type="button" class="btn btnBuy">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="contianerFloadable mt-1">
          <div class="paddingInside">
            <div class="title">KINGSONG S18</div>
            <div class="description mt-2">
              Foldable electric scooter<br />
              250W motor waterproof
            </div>
            <div class="floadbalePriceContainer">
              <typography class="price">$1099.00</typography>
            </div>
            <div class="mt-2">
              <button type="button" class="btn btnBuy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 contianerCycle">
        <div class="">
          <div class="paddingInside">
            <div class="title">KINGSONG S18</div>
            <div class="description mt-2">
              16-Inch electric unicycle<br />
              with mobile app
            </div>
            <div class="floadbalePriceContainer">
              <typography class="price">$1099.00</typography>
            </div>
            <div class="mt-2">
              <button type="button" class="btn btnBuy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

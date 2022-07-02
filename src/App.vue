<template>
  <v-app>
    <v-app-bar>
      <v-container>
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <v-avatar
              rounded="0"
              class="mr-3"
              :image="logourl" />

            {{ pagdata.slogan }}
          </div>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-sheet
          class="d-flex align-center py-16"
          color="#333333"
          height="420"
          :style="`background-image: url(${imgurlFirst}) !important;`">
          <v-container>

            <v-responsive width="300">

              <h3 class="text-h4">
                {{ pagdata.bodySections.first.title }}
              </h3>

              <hr style="opacity: 0.3; border: 1px;">

              <p class="mt-4 text-medium-emphasis">
                {{ pagdata.bodySections.first.main }}
              </p>
            
            </v-responsive>

            <v-responsive width="300">

              <v-form>
                  asd
              </v-form>

            </v-responsive>

          </v-container>
        </v-sheet>

      </section>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  
                  <h2 class="text-h4">
                    {{ pagdata.bodySections.second.title }}
                  </h2>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-8">
                    {{ pagdata.bodySections.second.main }}
                  </p>

                  <v-btn class="mt-6">
                    {{ pagdata.bodySections.second.cta }}
                  </v-btn>

                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                :src="imgurlSecond" />

            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="controls">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  
                  <h2 class="text-h4">
                    {{ pagdata.bodySections.thirth.title }}
                  </h2>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-8">
                    {{ pagdata.bodySections.thirth.main }}
                  </p>

                  <v-btn class="mt-6">
                    {{ pagdata.bodySections.thirth.cta }}
                  </v-btn>

                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                :src="imgurlThirth" />

            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  
                  <h2 class="text-h4">
                    {{ pagdata.bodySections.fourth.title }}
                  </h2>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-8">
                    {{ pagdata.bodySections.fourth.main }}
                  </p>

                  <v-btn class="mt-6">
                    {{ pagdata.bodySections.fourth.cta }}
                  </v-btn>

                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                :src="imgurlFourth" />

            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet
        class="py-16"
        color="#181818">
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive
                  class="overflow-visible">

                  <h2 class="text-h4">
                    {{ pagdata.bodySections.fourth.title }}
                  </h2>

                  <p class="mt-3">
                    {{ pagdata.bodySections.fourth.main }}
                  </p>

                </v-responsive>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-sheet>

    </v-main>
  </v-app>
</template>

<script>

    import logourl from './_model/logo.png';
    import imgurlFirst from './_model/first.jpeg'
    import imgurlSecond from './_model/second.jpeg'
    import imgurlThirth from './_model/thirth.jpeg'
    import imgurlFourth from './_model/fourth.jpeg'

    export default { 
        
        name: 'App',

        data () {
            return {
              logourl,
              imgurlFirst,
              imgurlSecond,
              imgurlThirth,
              imgurlFourth
            }
        },
 
        methods: {

        },
        
        mounted () {
          console.log('heloworld')
        },
        
        components: {}
    }

</script>

<style>
  
  #hero > div {
    background-size: cover;
    background-position: center;
  }

  .v-avatar {
      --v-avatar-height: 145px !important;
  }

</style>
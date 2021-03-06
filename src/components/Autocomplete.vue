<template>
  <div class="autocomplete">
    <div class="input" @click="toggleVisible" v-text="selectedItem ? selectedItem[filterby] : ''"></div>
    <div class="placeholder" v-if="selectedItem == null" v-text="title"></div>
    <button class="close" @click="selectedItem = null" v-if="selectedItem">x</button>
    <div class="popover" v-show="visible">
      <input
        type="text"
        ref="input"
        v-model="query"
        @keydown.up="up"
        @keydown.down="down"
        @keydown.enter="selectItem"
        placeholder="Digite o número ..."
      />
      <div class="options" ref="optionsList">
        <ul>
          <li
            v-for="(match, index) in matches"
            :key="index"
            :class="{ 'selected': (selected == index)}"
            @click="itemClicked(index)"
            v-text="match[filterby]"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    filterby: {
      type: String
    },
    title: {
      default: 'Digite...',
      type: String
    },
    shouldReset: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      itemHeight: 39,
      selectedItem: null,
      selected: 0,
      query: '',
      visible: false
    }
  },
  methods: {
    toggleVisible () {
      this.visible = !this.visible

      setTimeout(() => {
        this.$refs.input.focus()
      }, 50)
    },
    itemClicked (index) {
      this.selected = index
      this.selectItem()
    },
    selectItem () {
      if (!this.matches.length) {
        return
      }

      this.selectedItem = this.matches[this.selected]
      this.visible = false

      if (this.shouldReset) {
        this.query = ''
        this.selected = 0
      }

      this.$emit('selected', JSON.parse(JSON.stringify(this.selectedItem)))
    },
    up () {
      if (this.selected === 0) {
        return
      }

      this.selected -= 1
      this.scrollToItem()
    },
    down () {
      if (this.selected >= this.matches.length - 1) {
        return
      }

      this.selected += 1
      this.scrollToItem()
    },
    scrollToItem () {
      this.$refs.optionsList.scrollTop = this.selected * this.itemHeight
    }
  },
  computed: {
    matches () {
      this.$emit('change', this.query)

      if (this.query === '') {
        return []
      }

      return this.items.filter(item =>
        item[this.filterby].toLowerCase().includes(this.query.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.autocomplete {
  width: 100%;
  position: relative;
}
.input {
  height: 26px;
  border-radius: 5px;
  font-size: 18px;
  cursor: text;
  width: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #3e3e3e;
  margin-inline-start: 3px;
}
.close {
  position: absolute;
  right: 2px;
  top: 0px;
  background: none;
  border: none;
  font-size: 20px;
  color: lightgrey;
  cursor: pointer;
}
.placeholder {
  position: absolute;
  top: 0px;
  left: 7px;
  font-size: 16px;
  color: #3e3e3e;
  pointer-events: none;
}
.popover {
  min-height: 50px;
  border: 2px solid lightgray;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
}
.popover input {
  width: 95%;
  margin-top: 5px;
  height: 40px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid lightgray;
  padding-left: 8px;
}
.options {
  max-height: 150px;
  overflow-y: scroll;
  margin-top: 5px;
  font-size: 16px;
}
.options ul {
  list-style-type: none;
  text-align: left;
  padding-left: 0;
}
.options ul li {
  padding: 10px;
  cursor: pointer;
  background: white;
  color: #3e3e3e
}
.options ul li:not(.selected):hover {
  background: #8c8c8c;
  color: #fff;
}
.options ul li.selected {
  background: #0079ff;
  color: #fff;
  font-weight: 600;
}
</style>

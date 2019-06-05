// ViewModel

import Vue from 'vue'
import Bootstrap from 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import ToDoItem from './ToDoItem' // Model
import Cell from './components/Cell.vue' // Component

const firstItem = new ToDoItem(0);

new Vue({
    el: "#app", // View
    components: {
        "cell": Cell
    },
    data: {
        toDoItems: [firstItem]
    },
    methods: {
        addItem: function () {
            var id = 0;
            if (this.toDoItems.length > 0) {
                id = this.toDoItems[this.toDoItems.length - 1].id + 1;
            } else {
                id = 0;
            }
            this.$set(this.toDoItems, this.toDoItems.length, new ToDoItem(id));
        },
        deleteItem: function (itemID) {
            for (var i = 0; i < this.toDoItems.length; i++) {
                if (this.toDoItems[i].id == itemID) {
                    this.toDoItems.splice(i, 1);
                    break;
                }
            }
        },
        copyItem: function (itemID) {
            for (var i = 0; i < this.toDoItems.length; i++) {
                if (this.toDoItems[i].id == itemID) {
                    var copiedItem = Object.assign({}, this.toDoItems[i]);
                    copiedItem.id = this.toDoItems[this.toDoItems.length - 1].id + 1;
                    this.$set(this.toDoItems, this.toDoItems.length, copiedItem);
                    break;
                }
            } 
        }
    }
});

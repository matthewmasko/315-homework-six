var ITEMS = [
    {
        itemTitle: "Camping Stove",
        itemThumbImg: "camp-stove_150x150.jpg",
        itemFullImg: "camp-stove_300x300.jpg",
        itemBriefDescription: "For all your cooking needs!",
        itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        itemPrice: "Sale: $90",

    },
        
    {
            itemTitle: "Camping Chair",
            itemThumbImg: "camping_chair_150x150.jpg",
            itemFullImg: "camping_chair_300x300.jpg",
            itemBriefDescription: "Sit this one out.",
            itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            itemPrice: "Sale: $30",
    },

    {
                itemTitle: "Coffee Press",
                itemThumbImg: "coffee_press_150x150.jpg",
                itemFullImg: "coffee_press_300x300.jpg",
                itemBriefDescription: "A cuppa joe will do just fine.",
                itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                itemPrice: "Sale: $50",
    },

    {
                    itemTitle: "Coleman Tent",
                    itemThumbImg: "coleman-tent_150x150.jpg",
                    itemFullImg: "coleman-tent_300x300.jpg",
                    itemBriefDescription: "If you are camping, you need this most of all!",
                    itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    itemPrice: "Sale: $100",
    },

    {
        itemTitle: "Cot",
        itemThumbImg: "cot_150x150.jpg",
        itemFullImg: "cot_300x300.jpg",
        itemBriefDescription: "Keep those camping bugs away!",
        itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        itemPrice: "Sale: $120",

    },
        
    {
            itemTitle: "Flashlight",
            itemThumbImg: "flashlight_150x150.jpg",
            itemFullImg: "flashlight_300x300.jpg",
            itemBriefDescription: "Let there be (flash)light!",
            itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            itemPrice: "Sale: $10",
    },

    {
                itemTitle: "Kelty Sleeping Bag",
                itemThumbImg: "kelty-sleeping-bag_150x150.jpg",
                itemFullImg: "kelty-sleeping-bag_300x300.jpg",
                itemBriefDescription: "Snuggle in for the night.",
                itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                itemPrice: "Sale: $75",
    },

    {
                    itemTitle: "Lantern",
                    itemThumbImg: "lantern_150x150.jpg",
                    itemFullImg: "lantern_300x300.jpg",
                    itemBriefDescription: "Don't be in the dark!",
                    itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    itemPrice: "Sale: $30",
    },

    {
        itemTitle: "Sleeping Pad",
        itemThumbImg: "sleeping_pad_150x150.jpg",
        itemFullImg: "sleeping_pad_300x300.jpg",
        itemBriefDescription: "Nothing wrong with a little padding.",
        itemLongDescription: "Perspiciatis praesentium tempora quidem magnam consectetur dignissimos voluptatibus, ea maiores doloremque optio, iusto aspernatur aliquid quod adipisci neque, quaerat harum consequatur eaque?Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        itemPrice: "Sale: $40",
},

{
            itemTitle: "Solar Charger",
            itemThumbImg: "solar_charger_150x150.jpg",
            itemFullImg: "solar_charger_300x300.jpg",
            itemBriefDescription: "CHARGE!",
            itemLongDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quaerat? Maiores modi explicabo ab quibusdam reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quaerat? Maiores modi explicabo ab quibusdam reprehenderit.",
            itemPrice: "Sale: $75",
},


];

function loadData() {
    $.each(ITEMS, function(index, item){
$("#app").append(`<div id="${index}" class="item-holder">
<h4>${item.itemTitle}</h4>
<div class="item-image">
    <img src="images/camping_thumb/${item.itemThumbImg}" alt="${item.itemTitle}">
</div>
<div class="item-price">
    <div class="brief-description">
       ${item.itemBriefDescription}
    </div>
    <div class="price">${item.itemPrice}</div>
</div>
</div>`);
    });

     initListeners();
}

function initListeners() {
    $(".item-holder").click(function (e) {
        let itemIndex = e.currentTarget.id;
        // console.log(gameIndex);
        $("#app").html(`<div class="item"><div class="itemTitle">
        <h1>${ITEMS[itemIndex].itemTitle}</h1>
    </div>
    <div class="item-fullImage">
        <img src="images/camping_full/${ITEMS[itemIndex].itemFullImg}" alt="${ITEMS[itemIndex].itemTitle}">
    </div>
    
    <div class="item-fullDescription">
    ${ITEMS[itemIndex].itemLongDescription}
    </div>
    <div class="fullPrice">${ITEMS[itemIndex].itemPrice}</div>
    <div class="close">
    <button>CLOSE</button></div>
    </div>`)

    addCloseListener();
    });
}

function addCloseListener() {
$("button").click(function() {
    $("#app").html("");
    loadData();
});
}
$(document).ready(function() {
    loadData();
});
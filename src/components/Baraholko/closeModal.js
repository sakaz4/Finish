import styles from './closeModal.module.css';


function closeModal() {

    const modalWindow = document.querySelector(".modal-wrapper");
    modalWindow.remove();
}

class announcement {
    constructor({ id, name, img, description, place, price }) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.description = description;
        this.place = place;
        this.price = price;
    }

    edit ({
        name = this.name,
        img = this.img,
        description = this.description,
        place = this.place,
        price = this.price,
    }) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.place = place;
        this.price = price;
    }

    get() {
        return {
            name: this.name,
            id: this.id,
            img: this.img,
            description: this.description,
            place: this.place,
            price: this.price
        };
    }
}

class bikes {
    constructor(name) {
        this.bikesList = [];
    }

    add(name, img, description, place, price) {
        const id = this.bikesList.length + 1;
        const bike = new announcement({ id, name, img, description, place, price });
        this.bikesList.push(bike);
    }

    editAnnouncement(data) {
        const { name, id, img, description, place, price } = data;
        this.bikesList[id - 1].name = name;
        this.bikesList[id - 1].img = img;
        this.bikesList[id - 1].description = description;
        this.bikesList[id - 1].place = place;
        this.bikesList[id - 1].price = price;
    }

    remove(id) {
        delete this.bikesList[id - 1];
    }

    get() {
        return this.bikesList;
    
    }
}

class BikesApp extends bikes {
    constructor() {
        super();
    }

    get bikeListMethod() {
        return this.bikesList;
    }

    set bikeListMethod(newBikesList) {
        this.bikesList = newBikesList;
    }

    get localBikes() {
        const jsonBikes = localStorage.getItem("bikes");
        return JSON.parse(jsonBikes);
    }

    set localBikes(bikesList) {
        const jsonBikes = JSON.stringify(bikesList);
        localStorage.setItem("bikes", jsonBikes);
    }

    getData() {
        fetch("https://retoolapi.dev/TiYpZB/data")
        .then((response) => response.json())
        .then((json) => {
          this.bikesList = json;
          this.draw();
        });
    }


    onRemoveEdit(id) {
        const openModal = () => {
            document.body.insertAdjacentHTML(
                "beforeend",
                `<div className={styles.modalWrapper}>
                    <div className={styles.modalBox}>
                        <span className={styles.close}>❎</span>
                        <h1>Editing ...</h1>
                    </div>
                </div>`
            );

            const contentBox = document.querySelector(".modal-box");
            const nameInput = document.createElement("input");
            nameInput.placeholder = "enter the name of your bike";
            const imgInput = document.createElement("input");
            imgInput.placeholder = "upload photo of your bike";
            const descriptionInput = document.createElement("input");
            descriptionInput.placeholder = "enter a description of your bike";
            const placeInput = document.createElement("input");
            placeInput.placeholder = "enter the location of your bike";
            const priceInput = document.createElement("input");
            priceInput.placeholder = "enter the cost of your bike";

            const save = document.createElement("button");
            save.innerText = "Save";
            save.classList.add('btnSave');

            save.addEventListener("click", () => {
                this.editAnnouncement({
                    id: id,
                    name: nameInput.value,
                    img: imgInput.value,
                    description: descriptionInput.value,
                    place: placeInput.value,
                    price: priceInput.value,
                });
                closeModal();
                this.draw();
            });
            contentBox.appendChild(nameInput);
            contentBox.appendChild(imgInput);
            contentBox.appendChild(descriptionInput);
            contentBox.appendChild(placeInput);
            contentBox.appendChild(priceInput);

            contentBox.appendChild(save);
            const close = document.querySelector(".close");
            close.addEventListener("click", closeModal);
        };

        const wrapperBtns = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add('removeBtn');
        removeBtn.addEventListener("click", () => {
            this.remove(id);
            this.draw();
        });

        editBtn.addEventListener("click", openModal);
        wrapperBtns.appendChild(editBtn);
        wrapperBtns.appendChild(removeBtn);
        return wrapperBtns;
    }

    draw() {
        this.localBikes = this.bikesList; 
        const oldList = document.getElementById("bikesList");
        if(oldList) {
            oldList.remove();
        }

        const bikeList = document.createElement("ul");
        bikeList.id = "bikeList";

        this.bikesList.map((bike) => {
            if (bike) {
                const li = document.createElement("li");
                const bikeNode = document.createElement("h2");
                bikeNode.innerText = bike.name;
                const imgNode = document.createElement("p");
                imgNode.innerText = bike.img;
                const descriptionNode = document.createElement("p");
                descriptionNode.innerText = bike.description;
                const placeNode = document.createElement("p");
                placeNode.innerText = bike.place;
                const priceNode = document.createElement("p");
                priceNode.innerText = bike.price;

                li.appendChild(bikeNode);
                li.appendChild(imgNode);
                li.appendChild(descriptionNode);
                li.appendChild(placeNode);
                li.appendChild(priceNode);
                bikeList.appendChild(li);
                const btns = this.onRemoveEdit(bike.id);
                li.appendChild(btns);
            }
        });
        document.body.appendChild(bikeList);
    }

    creation() {
        const form = document.createElement("form");
        const bikeName = document.createElement("input");
        bikeName.placeholder = "enter the name of your bike";
        const bikeImg = document.createElement("input");
        bikeImg.placeholder = "upload photo of your bike";
        const bikeDescription = document.createElement("input");
        bikeDescription.placeholder = "enter a description of your bike";
        const bikePlace = document.createElement("input");
        bikePlace.placeholder = "enter the location of your bike";
        const bikePrice = document.createElement("input");
        bikePrice.placeholder = "enter the cost of your bike";

        form.appendChild(bikeName);
        form.appendChild(bikeImg)
        form.appendChild(bikeDescription);
        form.appendChild(bikePlace);
        form.appendChild(bikePrice);

        const addBtn = document.createElement("button");
        addBtn.innerText = "Create announcement";
        addBtn.classList.add("addBtn");

        form.appendChild(addBtn);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = event.currentTarget[0].value;
            event.currentTarget[0].value = "";
            const img = event.currentTarget[1].value;
            event.currentTarget[1].value = "";
            const description = event.currentTarget[2].value;
            event.currentTarget[2].value = "";
            const place = event.currentTarget[3].value;
            event.currentTarget[3].value = "";
            const price = event.currentTarget[4].value;
            event.currentTarget[3].value = "";

            this.add(name, img, description, place, price);
            this.draw();
        });

        document.body.appendChild(form);

        if (!localStorage.getItem("bikes")) {
            this.getData();
            this.localBikes = bikesList;
        } else {
            this.bikesList = this.localBikes;
            this.draw();
        }
    }
}

const bike1 = new announcement ("scott", "img", "new bike", "Minsk", "1000");
const listOfBikes = new BikesApp();
listOfBikes.creation();
console.log(listOfBikes);

export default closeModal;

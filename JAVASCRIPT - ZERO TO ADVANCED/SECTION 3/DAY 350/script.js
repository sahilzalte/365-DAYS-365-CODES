
function getUsers() {


    fetch('https://randomuser.me/api/?results=5')

        .then(raw => raw.json())
        .then((data) => {
            data.results.forEach((user) => {

                const card = document.createElement("div");
                card.className = "bg-white rounded-lg shadow-lg p-6 m-3 w-80";


                const img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "User";
                img.className = "w-24 h-24 rounded-full mx-auto mb-4";
                card.appendChild(img);


                const name = document.createElement("h2");
                name.textContent = user.name.first + " " + user.name.last;
                name.className = "text-2xl font-bold text-center text-gray-800";
                card.appendChild(name);


                const role = document.createElement("p");
                role.textContent = user.email
                role.className = "text-gray-600 text-center mb-4";
                card.appendChild(role);


                const desc = document.createElement("p");
                desc.textContent = "Passionate about creating beautiful web experiences.";
                desc.className = "text-gray-700 text-center text-sm mb-6";
                card.appendChild(desc);


                const btnWrapper = document.createElement("div");
                btnWrapper.className = "flex gap-2";


                const followBtn = document.createElement("button");
                followBtn.textContent = "Follow";
                followBtn.className = "flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600";
                btnWrapper.appendChild(followBtn);


                const msgBtn = document.createElement("button");
                msgBtn.textContent = "Message";
                msgBtn.className = "flex-1 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400";
                btnWrapper.appendChild(msgBtn);

                card.appendChild(btnWrapper);


                document.querySelector(".users").appendChild(card);

            })
        })
}

getUsers();

let refresh = document.querySelector("#loadUsers")

refresh.addEventListener("click", () => {
    document.querySelector(".users").innerHTML = "";
    getUsers();
})
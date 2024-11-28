function activityToHTML(activity) {
    const { id, title, description, imgUrl } = activity;

    const activityCard = document.createElement("div");
    activityCard.classList.add("activity-card");
    activityCard.dataset.id = id; 

  
    const borderContainer = document.createElement("div");
    borderContainer.style.width = "300px"; 

    const deleteButton = document.createElement("button");
    deleteButton.textContent = ""; 
    // deleteButton.style.marginLeft = "260px";
   
    deleteButton.classList.add("delete-button");
    // activityCard.appendChild(deleteButton);

    const imageContainer = document.createElement("div");
    imageContainer.style.width = "100%"; 
    imageContainer.style.textAlign = "center"; 


    const imageElement = document.createElement("img");
    imageElement.src = imgUrl;
    imageElement.style.width = "200px"; 
    imageElement.style.height = "200px";
    imageContainer.appendChild(imageElement); 

    

   
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    titleElement.style.width = "100%";
    titleElement.style.textAlign = "center";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    descriptionElement.style.width = "100%"; 
    descriptionElement.style.textAlign = "center"; 

   
    borderContainer.appendChild(titleElement); 
    borderContainer.appendChild(imageContainer); 
    borderContainer.appendChild(descriptionElement); 

    activityCard.appendChild(borderContainer); 

    

    return activityCard;
}

function renderActivities(container) {
    // Actividad 3
    const activitiesContainer = document.getElementById(container);
    activitiesContainer.innerHTML = "";

    const activities = repository.getAllActivities();
    activities.forEach(activity => {
        const activityElement = activityToHTML(activity);
        activitiesContainer.appendChild(activityElement);
    });
}

function handleCreateActivity() {
    // Actividad 4
    const titleInput = document.getElementById("tituloInput").value;
    const descriptionInput = document.getElementById("descripcionInput").value;
    const imgUrlInput = document.getElementById("urlImagen").value;

    
    if (!titleInput || !descriptionInput || !imgUrlInput) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    repository.createActivity(titleInput, descriptionInput, imgUrlInput);
    renderActivities("contenedorImagenes");
    document.getElementById("tituloInput").value = "";
    document.getElementById("descripcionInput").value = "";
    document.getElementById("urlImagen").value = "";
}



// Actividad 5 solucion de la imagen "x" para eliminar y lo comente para que no aparezca
function handleDeleteActivity(event) {
    const activityCard = event.target.closest(".activity-card");
    if (activityCard) {
        const activityId = parseInt(activityCard.dataset.id);
        repository.deleteActivity(activityId);
        renderActivities("contenedorImagenes");
        
    }
}


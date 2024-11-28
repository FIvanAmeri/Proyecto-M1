// Actividad 
const repository = new Repository();    
// Actividad 5
const addButton = document.querySelector(".btn-mostrar button");
addButton.addEventListener("click", handleCreateActivity);



// Esto elimina el contenido en el contenedor de actividades
const activitiesContainer = document.getElementById("contenedorImagenes");
activitiesContainer.addEventListener("click", handleDeleteActivity);

module.exports = {
    Activity,
    Repository,
  }
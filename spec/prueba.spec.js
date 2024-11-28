const {Activity, Repository} = require("../scripts/models.js")

describe("Testing clase Activity", () =>{
  it("una instancia de la clase Activity posea los atributos correspondientes", () => {
    const nuevaActividad = new Activity()
    const keys = Object.keys(nuevaActividad)
    expect(keys.length).toBe(4)
    expect(keys).toContain("id")
    expect(keys).toContain("title")
    expect(keys).toContain("description")
    expect(keys).toContain("imgUrl")
  })
})

describe("Testing clase Repository", () =>{
  it("Quiero controlar Repository", () =>{
    const nuevoRepository = new Repository()
    const keys = Object.keys(nuevoRepository)
    expect(keys.length).toBe(2)
    expect(keys).toContain("activities")
    expect(keys).toContain("id")
  })
})



module.exports = {
  Activity,
  Repository
}


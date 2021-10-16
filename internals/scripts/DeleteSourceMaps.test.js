const rewire = require("rewire")
const DeleteSourceMaps = rewire("./DeleteSourceMaps")
const deleteSourceMaps = DeleteSourceMaps.__get__("deleteSourceMaps")
// @ponicode
describe("deleteSourceMaps", () => {
    test("0", () => {
        let callFunction = () => {
            deleteSourceMaps()
        }
    
        expect(callFunction).not.toThrow()
    })
})

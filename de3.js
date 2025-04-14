let contentList = [
    {
        name: "tet",
        local: "viet nam",
        date: "2006-07-21",
        Organizer: "khang"
    }
]

function renderContent() {
    let dateHTML = ``
    for (let i = 0; i < contentList.length; i++) {
        dateHTML += `
        <tr>
            <td>${contentList[i].name}</td>
            <td>${contentList[i].date}</td>
            <td>${contentList[i].local}</td>
            <td>${contentList[i].Organizer}</td>
            <td>
                <button onclick="uploadData(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-info">Sửa</button>
                <button onclick="deleteContent(${i})" class="btn btn-danger">Xoá</button>
            </td>
        </tr>
        `
    }
    document.querySelector("tbody").innerHTML = dateHTML
}
renderContent();

function addContent(event) {
    event.preventDefault()
    let name = event.target.name.value
    if ((name == 0)){
        document.querySelector(".obligatory_name").innerHTML = "Không được để trống"
        return
    }
    let local = event.target.local.value
    if ((local == 0)){
        document.querySelector(".obligatory_local").innerHTML = "Không được để trống"
        return
    }
    let date = event.target.date.value
    if ((date == 0)){
        document.querySelector(".obligatory_date").innerHTML = "Không được để trống"
        return
    }
    let Organizer = event.target.Organizer.value
    if ((Organizer == 0)){
        document.querySelector(".obligatory_Organizer").innerHTML = "Không được để trống"
        return
    }
    let newContent = {
        name: name,
        local: local,
        date: date,
        Organizer: Organizer
    }
    contentList.push(newContent)
    document.querySelector(".name").value = ""
    document.querySelector(".local").value = ""
    document.querySelector(".date").value = ""
    document.querySelector(".Organizer").value = ""
    renderContent();
}

function deleteContent(index) {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
        contentList.splice(index, 1)
        renderContent()
        alert("Xoá thành công")
    }

}


const editEL = document.querySelector(".form_edit")
function uploadData(index) {
    editEL.index.value = index
    editEL.name.value = contentList[index].name
    editEL.local.value = contentList[index].local
    editEL.date.value = contentList[index].date
    editEL.Organizer.value = contentList[index].Organizer
}

function updateContent(event) {
    event.preventDefault()
    let index = editEL.index.value
    let name = editEL.name.value
    if ((name.length == 0)){
        document.querySelector(".obligatory_edit_name").innerHTML = "Không được để trống"
        return
    }
    let local = editEL.local.value
    if ((local.length == 0)){
        document.querySelector(".obligatory_edit_local").innerHTML = "Không được để trống"
        return
    }
    let date = editEL.date.value
    if ((date.length == 0)){
        document.querySelector(".obligatory_edit_date").innerHTML = "Không được để trống"
        return
    }
    let Organizer = editEL.Organizer.value
    if ((Organizer.length == 0)){
        document.querySelector(".obligatory_edit_Organizer").innerHTML = "Không được để trống"
        return
    }
    let newContent = {
        name: name,
        local: local,
        date: date,
        Organizer: Organizer
    }
    contentList[index]=newContent
    renderContent();
    event.target.querySelector("button").click()
}
function Contect(){
    return (
        <div className="App  bg-dark text-white p-5">
            <h1>Contect</h1>
            <img src="https://media.istockphoto.com/id/515708494/photo/mahatma-gandhi-hall.jpg?s=612x612&w=0&k=20&c=0r0tu3VAbZdmf4RlwI3Q-xZjiMa4abSfsvnDxHVlGCo=" width="300px"/>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis et aut voluptatibus in recusandae laborum quia illo exercitationem. Aut accusamus itaque quaerat expedita ipsam aperiam est exercitationem, dignissimos ipsa obcaecati similique fuga optio veritatis labore id esse sunt a possimus! Similique nulla cum voluptas consectetur vitae doloremque adipisci.</p>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis et aut voluptatibus in recusandae laborum quia illo exercitationem. Aut accusamus itaque quaerat expedita ipsam aperiam est exercitationem, dignissimos ipsa obcaecati similique fuga optio veritatis labore id esse sunt a possimus! Similique nulla cum voluptas consectetur vitae doloremque adipisci.</p>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis et aut voluptatibus in recusandae laborum quia illo exercitationem. Aut accusamus itaque quaerat expedita ipsam aperiam est exercitationem, dignissimos ipsa obcaecati similique fuga optio veritatis labore id esse sunt a possimus! Similique nulla cum voluptas consectetur vitae doloremque adipisci.</p>
            <div class="mb-3">
                <label for="formFile" class="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mb-3">
                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="mb-3">
                <label for="formFileDisabled" class="form-label">Disabled file input example</label>
                <input className="form-control" type="file" id="formFileDisabled" disabled />
            </div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input className="form-control form-control-sm" id="formFileSm" type="file" />
            </div>
            <div>
                <label for="formFileLg" class="form-label">Large file input example</label>
                <input className="form-control form-control-lg" id="formFileLg" type="file" />
            </div>
        </div>
    )
}
export default Contect
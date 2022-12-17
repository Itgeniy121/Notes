//tyt shas bydet pizda i voobshe eto experiment 


//values
let flag = 1;
let count = 1;
let IdCount = 1;
let NoteValue;
let NoteId = 0;
let Title;
let Hran = {};
let TitleBefore;
let TextBefore;



//buttons
let closePopUp = document.querySelector('.close');
let buttonAdd = document.querySelector('.buttonplus');
let buttonDelete = document.querySelector('.buttonminus');
let openPopUp = document.getElementById(`${IdCount}`);





//Elements
let Texxt = document.querySelector('.mainText');
let PopUp = document.querySelector('.pop_up');
let Notes = document.querySelector('.notes');
let title = document.querySelector('.title2');









//openNote or DeleteNote
Notes.addEventListener('click', function(e){
    let block = e.target
    if(block.closest('.note')){
        NoteId = block.id;
        if (flag ==1){
            
        if(NoteId in Hran === true){
            NoteId = block.id;

            Texxt.value = Object.values(Hran[NoteId]).join();
            title.value = Object.keys(Hran[NoteId]).join();
            if(title.value.length > 80){
                let note = document.getElementById(`${NoteId}`);
                note.style = 'font-size: 10px';
            }
            TextBefore = Texxt.value;
            TitleBefore = title.value;
        } else if (NoteId in Hran === false){
            NoteId = block.id;
            Texxt.value = '';
            title.value = '';
        }
        e.preventDefault();
        PopUp.classList.add('active');

    } else {
        buttonDelete.style = 'background: #F1B77D';
        delete Hran[NoteId];
        FindId(block.id).remove();
        console.log(Hran);
        flag = 1;
    }
}
})

//CloseNote
closePopUp.addEventListener('click', () => {
    NoteValue = Texxt.value;
    Title = title.value;
    let updateTitle = document.getElementById(`${NoteId}`);
    if(NoteValue != '' && Title != '' && (NoteId in Hran === false) ){
    Hran[NoteId] = {[Title]: NoteValue};
    updateTitle.innerHTML = `${Title}`;
    PopUp.classList.remove('active');

    }else if(NoteValue != '' && Title == '' && (NoteId in Hran === false)) {
        Hran[NoteId] = {'': NoteValue};
        PopUp.classList.remove('active');

    } else if(NoteValue == '' && Title != '' && (NoteId in Hran === false)){
        Hran[NoteId] = {[Title]: ''};
        updateTitle.innerHTML = `${Title}`;
        PopUp.classList.remove('active');

    } else if(NoteValue != '' && Title != '' && (NoteId in Hran === true)){
        if(NoteValue == TextBefore && Title == TitleBefore){
            PopUp.classList.remove('active'); 
        } else if(NoteValue == TextBefore && Title != TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            
            updateTitle.innerText = `${Title}`;
            PopUp.classList.remove('active');
        } else if(NoteValue != TextBefore && Title == TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            PopUp.classList.remove('active');
        }else if(NoteValue != TextBefore && Title != TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            updateTitle.innerHTML = `${Title}`;
            PopUp.classList.remove('active'); 
        }

    } else if(NoteValue == '' && Title != '' && (NoteId in Hran === true)){
        if(NoteValue == TextBefore && Title == TitleBefore){
            PopUp.classList.remove('active'); 
        } else if(NoteValue == TextBefore && Title != TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            updateTitle.innerHTML = `${Title}`;
            PopUp.classList.remove('active');
        } else if(NoteValue != TextBefore && Title == TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            PopUp.classList.remove('active');
        }else if(NoteValue != TextBefore && Title != TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            updateTitle.innerHTML = `${Title}`;
            PopUp.classList.remove('active');
        }

    } else if(NoteValue != '' && Title == '' && (NoteId in Hran === true)){
        if(NoteValue == TextBefore && Title == TitleBefore){
            PopUp.classList.remove('active'); 
        } else if(NoteValue == TextBefore && Title != TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            updateTitle.innerHTML = `${Title}`;
            PopUp.classList.remove('active');
        } else if(NoteValue != TextBefore && Title == TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            PopUp.classList.remove('active');
        }else if(NoteValue != TextBefore && Title != TitleBefore){
            Hran[NoteId] = {[Title]: NoteValue};
            updateTitle.innerHTML = `${Title}`;
            PopUp.classList.remove('active');
        }

    } else PopUp.classList.remove('active');
})

//AddNote
buttonAdd.addEventListener('click', () =>{
    let newNote = document.createElement('button');
    let headerNote = document.createElement('h4');
    headerNote.innerText = `Note${IdCount}`;
    newNote.appendChild(headerNote);
    Notes.appendChild(newNote);
    newNote.className = 'note';
    newNote.id = `${IdCount}`;
    //newNote.innerHTML += `<br>${count}`;
    count += 1;
    IdCount +=1;

})

//DeleteNote
buttonDelete.addEventListener('click', () =>{
    flag = 0;
    buttonDelete.style = 'background: #E4481E';
})

//functions 
function FindId(id){
    let arr = Notes.childNodes;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === id) return arr[i]
    }
}



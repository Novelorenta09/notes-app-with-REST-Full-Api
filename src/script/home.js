
function main(){
  const baseUrl='https://notes-api.dicoding.dev/v2';

  const getNotes=function(){
    const loader=document.querySelector('loader-notes');
    loader.style.display='block';

    fetch(`${baseUrl}/notes`)
    .then(respon=>{
      return respon.json();
    })
    .then(responJson=>{
      if(responJson.error){
        showRespon(responJson.message);
      }else{
        renderDaftarCatatan(responJson.data);
      }
      loader.style.display='none';
    })
    .catch(error=>{
      showRespon(error);
      loader.style.display='none';
    })
  };


  

  const insertNote=(note)=>{
    const { id, ...newNote } = note; 
    fetch(`${baseUrl}/notes`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newNote)
    })
    .then(respon=>{
      return respon.json();
    })
    .then(responJson=>{
      showRespon(responJson.message);
      getNotes();
    })
    .catch(error=>{
      showRespon(error);
    });
  };
  

  const delNotes=(note_id)=>{
    fetch(`${baseUrl}/notes/${note_id}`,{
      method:'DELETE'
    })
    .then(respon=>{
      return respon.json();
    })
    .then(responJson=>{
      showRespon(responJson.message);
      getNotes();
    })
    .catch(error=>{
      showRespon(error);
    });
  };

  const archiveNotes=(note_id)=>{
    fetch(`${baseUrl}/notes/${note_id}/archive`,{
      method:'POST'
    })
    
    .then(respon=>{
      return respon.json();
    })
    .then(responJson=>{
      showRespon(responJson.message);
      getNotes();
    })
    .catch(error=>{
      showRespon(error);
    });
  };



  const renderDaftarCatatan=(notes)=>{
    const listNotes=document.querySelector('#daftarCatatan');
    listNotes.innerHTML='';
    notes.forEach(note => {
      const createdAt = new Date(note.createdAt).toLocaleString('en-US', { timeZone: 'UTC' });
      listNotes.innerHTML +=`
      <li>
          <h3>${note.title}</h3>
          <p>${note.body}</p><br><br>
          <span>Created At: ${createdAt}</span><br>
          <button type="button"  id="${note.id}" class="btnDelete" style="background:red; border:none; padding:5px; border-radius:5px; color:#eee; margin:5px 0;" >Hapus</button>

          <button type="submit" id="${note.id}" class="btnArchive" style="background:lightgreen; color:white; padding:5px; margin:5px; border:none; border-radius:5px;">Archive</button>
       </li>`;
      
    });
    const btnDelete=document.querySelectorAll('.btnDelete');
    btnDelete.forEach(btn=>{
      btn.addEventListener('click', event=>{
        const note_id=event.target.id;
        delNotes(note_id);
      });
    });

    const btnArchive=document.querySelectorAll('.btnArchive');
    btnArchive.forEach(btn=>{
      btn.addEventListener('click', event=>{
        const note_id=event.target.id;
        archiveNotes(note_id);
      });
    });
  };




  const showRespon=(message='periksa koneksi internet anda!')=>{
    alert(message);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const btnTambah=document.querySelector('#tambah');
    btnTambah.addEventListener('click',function(){
      const inputTitle=document.querySelector('#title').value;
      const inputTeks=document.querySelector('#body').value;
      const note={
        // id:'notes-' + Math.random().toString(36).substr(2, 10),
        title:inputTitle,
        body:inputTeks,
      }

      insertNote(note);
    });
    getNotes();

    
  });

}
window.addEventListener('load',function(){
  const loader=document.querySelector('loader-notes');
  document.body.style.background='';
  this.document.body.style.zIndex='999';

  loader.style.display='block';
  this.setTimeout(function(){
      loader.style.display='none';
  document.body.style.background='white';
  document.body.style.overflow='';

  },1000);
});

const pencilButton=document.getElementById('pencilButton');
  const teksClue=document.getElementById('clue');
  
  pencilButton.addEventListener('click', ()=>{
      noteForm.removeAttribute('hidden');
      teksClue.setAttribute('hidden',true);
      pencilButton.setAttribute('hidden',true);
  
  });
  
  console.log(pencilButton);

export default main;

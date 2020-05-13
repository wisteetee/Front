export default async function({$auth, next, store}) {
  let user = $auth.user;
  if(user && user.role.nomRole==='Editeur'){

  }else{

    store.dispatch('snackbar/setSnackbar', {color:'error', text:'Vous devez etre editeur pour consulter cette page'})
    next('/')
  }
}

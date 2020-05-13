export default async function({$auth, next, store}) {
  let user = $auth.user;
  if(user && user.role.nomRole==='Commercial'){

  }else{

    store.dispatch('snackbar/setSnackbar', {color:'error', text:'Vous devez etre commercial pour consulter cette page'})
    next('/')
  }
}

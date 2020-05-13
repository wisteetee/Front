export default async function({$auth, next, store}) {
  let user = $auth.user;
  if(user){

  }else{

    store.dispatch('snackbar/setSnackbar', {color:'error', text:'Vous devez etre connecté pour consulter cette page'})
    next('/')
  }
}

export default async function({$auth, next, store}) {
  let user = $auth.user;
  if(user && user.role.nomRole==='Manager'){

  }else{

    store.dispatch('snackbar/setSnackbar', {color:'error', text:'Vous devez etre manager pour consulter cette page'})
    next('/')
  }
}

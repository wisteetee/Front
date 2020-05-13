export default async function({$auth, next, store}) {
  let user = $auth.user;
  if(user && user.role.nomRole==='Administrateur'){

  }else{

    store.dispatch('snackbar/setSnackbar', {color:'error', text:'Vous devez etre administrateur pour consulter cette page'})
    next('/')
  }
}

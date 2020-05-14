export default async function({$auth, next, store}) {
  let user = $auth.user;
  if(user) {
    if (user.role.nomRole === 'Manager' || user.role.nomRole === 'Editeur' || user.role.nomRole === 'Commercial' || user.role.nomRole === 'Administrateur') {

    } else {

      store.dispatch('snackbar/setSnackbar', {
        color: 'error',
        text: 'Vous n\'avez pas les droits pour consulter cette page'
      })
      next('/')
    }
  }
    else{
    store.dispatch('snackbar/setSnackbar', {
      color: 'error',
      text: 'Vous devez être connecté pour consulter cette page'
    })
    next('/')
    }


}

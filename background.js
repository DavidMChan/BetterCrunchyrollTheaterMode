
if (document.getElementsByClassName('userpanel-item login').length > 0) {
  console.log('Not logged in.')
  document.querySelectorAll('#showmedia_video').forEach((element) => {
    document.querySelector('body').classList.add('guest-crunchyroll-theater-mode');
  });

  // Modify the DIV structure so that it can be rearranged

  // New comment structure
  var new_guestbook = document.createElement('div')
  new_guestbook.setAttribute('style', 'width: 100%;')
  var left_child = document.createElement('div')
  left_child.setAttribute("class", "left");
  left_child.setAttribute('id', 'main_content_left_')
  var right_child = document.createElement('div')
  right_child.setAttribute("class", "right");
  right_child.setAttribute('id', 'main_content_right_')

  // Add the guestbook to the left child
  var guestbook = document.getElementsByClassName('guestbook comments box')[0];
  guestbook.setAttribute('id', 'guestbook_');
  left_child.appendChild(guestbook);

  // Add the sidebar to the right child
  var sidebar = document.getElementById('sidebar');
  sidebar.setAttribute('id', 'sidebar_');
  sidebar.setAttribute('class', '');
  right_child.appendChild(sidebar);

  new_guestbook.appendChild(left_child);
  new_guestbook.appendChild(right_child);

  // Create comment book DIV
  document.getElementById('main_content').appendChild(new_guestbook);


  document.getElementById('')

} else {
  document.querySelectorAll('#showmedia_video').forEach((element) => {
    document.querySelector('body').classList.add('crunchyroll-theater-mode');
  });
}

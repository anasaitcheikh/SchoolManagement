export let MENU_ITEM_HEADMASTER = [
    {
        path: 'dashboardHeadmaster',
        title: 'Dashboard',
        icon: 'dashboard'
    },

    {
        path: 'userInfo',
        title: 'Profile',
        icon: 'image'
    },
    {
      path: 'uploadcorse',
      title: 'Upload Corse Materials',
      icon: 'book'
  },
    {
      path: 'bookRoom',
      title: 'Book Room',
      icon: 'home'
    },
    {
      path: 'addClass',
      title: 'Add Class',
      icon: 'plus-square'
    },
    {
        path: '',
        title: 'Teachers',
        icon: 'user',
        children: [
         {
           path: 'allTeachers',
           title: 'All Teachers'
         },
         {
           path: 'addTeacher',
           title: 'Add Teacher'
      }
    ]
  },

  {
        path: '',
        title: 'Students',
        icon: 'user',
        children: [
         {
          path: 'allStudents',
          title: 'All Students'
         },
        {
          path: 'addStudent',
          title: 'Add Student'
        }
      ]
  },

  {
    path: '',
    title: 'Planning',
    icon: 'calendar',
    children: [
       {
         path: 'viewPlanning',
         title: 'View Planning'
       },
      {
        path: 'requestModifyPlanning',
        title: 'Planning change requests'
      },

      {
        path: 'timetable-edit',
        title: 'Create/Edit Timetable',
     }

    ]
  },

];

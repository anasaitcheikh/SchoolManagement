export let MENU_ITEM_HEADMASTER = [
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
    path: '',
    title: 'Classrooms',
    icon: 'home',
    children: [
      {
        path: 'viewClassrooms',
        title: 'Show classrooms'
      },
      {
        path: 'bookRoom',
        title: 'Book classroom',

      },
    ]
  },
  {
    path: '',
    title: 'Classes',
    icon: 'users',
    children: [
      {
        path: 'viewClasses',
        title: 'Show classes'
      },
      {
        path: 'addClass',
        title: 'Add Class',

      },      
    ]
  },
  
    {
        path: '',
        title: 'Teachers',
        icon: 'male',
        children: [
         {
           path: 'teachers',
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
    title: 'Staffs',
    icon: 'user',
    children: [
      {
        path: 'staffs',
        title: 'All Staffs',

      },
      {
        path: 'addStaff',
        title: 'Add Staff'
      },
    ]
  },
  

];

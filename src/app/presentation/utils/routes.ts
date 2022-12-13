export const ROUTES = {
    INDEX: {
      PATH: '/',
    },
    APP: {
      PATH: '',
      ROUTES: {
        HOME: {
          PATH: '',
          FULL_PATH: '',
          PAGE_NAME: 'home',
        },
        HELPCENTER: {
          PATH: 'helpcenter',
          FULL_PATH: 'helpcenter',
          PAGE_NAME: 'helpcenter',
        },
        NOTIFICATIONS: {
          PATH: 'notifications',
          FULL_PATH: 'notifications',
          PAGE_NAME: 'notifications',
        },
        SEARCH: {
          PATH: 'search',
          FULL_PATH: 'search',
          PAGE_NAME: 'search',
        },
        PROFILING: {
          PATH: 'perfilamiento',
          ROUTES: {
            WELCOME: {
              PATH: '',
              FULL_PATH: 'perfilamiento',
              PAGE_NAME: 'bienvenido',
            },
            QUESTIONS: {
              PATH: 'preguntas',
              FULL_PATH: 'perfilamiento/preguntas',
              PAGE_NAME: 'questions',
            },
            EXPLORE_STEP: {
              PATH: 'explora-crece',
              FULL_PATH: 'perfilamiento/explora-crece',
              PAGE_NAME: 'explore-crece',
            },
            CLOSING_STEP: {
              PATH: 'paso-de-cierre',
              FULL_PATH: 'perfilamiento/paso-de-cierre',
              PAGE_NAME: 'closing-step',
            },
          },
        },
        CONSTITUTION_PROFILING: {
          PATH: 'constitution-profiling',
          ROUTES: {
            STEP1: {
              PATH: 'step1',
              FULL_PATH: 'constitution-profiling/step1',
              PAGE_NAME: 'step1',
            },
          },
        },
        PROFILE: {
          PATH: 'profile',
          FULL_PATH: 'profile',
          PAGE_NAME: 'profile',
        },
        THIRD_PROFILING: {
          PATH: 'third-profiling',
          ROUTES: {
            STEP1: {
              PATH: '',
              FULL_PATH: 'third-profiling',
              PAGE_NAME: 'third-profiling',
            },
            CONFIRM: {
              PATH: 'confirm',
              FULL_PATH: 'third-profiling/confirm',
              PAGE_NAME: 'third-profiling',
            },
          },
        },
        CONFIRM: {
          PATH: 'confirm',
          FULL_PATH: 'confirm',
          PAGE_NAME: 'confirm',
        },
        CATEGORY: {
          PATH: 'category',
          FULL_PATH: 'category',
          PAGE_NAME: 'category',
          ROUTES: {
            SECTIONS: {
              PATH: ':categoryId',
              FULL_PATH: 'category/:categoryId',
              PAGE_NAME: 'sections',
            },
            SECTION_DETAIL: {
              PATH: ':categoryId/section/:sectionId',
              FULL_PATH: 'category/:categoryId/section/:sectionId',
              PAGE_NAME: 'section-detail',
            },
            FINISHED: {
              PATH: ':categoryId/finished',
              FULL_PATH: 'category/:categoryId/finished',
              PAGE_NAME: 'category-finished',
            },
          },
        },
      },
    },
    SERVER_ERROR: {
      PATH: '500',
      PAGE_NAME: 'Error',
    },
  };
  
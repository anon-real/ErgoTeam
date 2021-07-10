export const EnableContactModal = () => {
    document.getElementById('app-container').classList.add("active-contact");
    return {
    type: 'contact_page',
    data: true
    }
  }
  
  export const DisableContactModal = () => {
    document.getElementById('app-container').classList.remove("active-contact");
    return {
      type: 'contact_page',
      data: false
    }
  };
  
  export const EnableSplashScreen = () => ({
    type: 'splashscreen',
    data: true
  });
  
  export const DisableSplashScreen = () => ({
    type: 'splashscreen',
    data: false
  });
  
  export const EnableMobileMenu = () => ({
    type: 'mobilemenu',
    data: true
  });
  
  export const DisableMobileMenu = () => ({
    type: 'mobilemenu',
    data: false
  });
  
  
  export const setHistory = (data) => ({
    type: 'history',
    data: data
  });
  
  export const changeStatusToRtl = () => ({
    type: 'changeDirectionToRtl'
  });
  
  export const changeStatusToLtr = () => ({
    type: 'changeDirectionToLtr'
  });
  
  export const EnableSelectLanguagePage = () => ({
    type: 'SelectLanguagePage',
    data: true
  });
  
  export const DisableSelectLanguagePage = () => ({
    type: 'SelectLanguagePage',
    data: false
  });
  
  export const EnablePreviewPage = (status,type,src) => ({
    type: 'SetPreview',
    data: {status:true,data:{file_type:type,file:src}}
  });
  
  export const DisablePreviewPage = () => ({
    type: 'SetPreview',
    data: {status:false,data:{status:false,data:null}}
  });
  
  export const EnableTeamPreviewPage = (data) => {
    document.getElementById('app-container').classList.add("active-contact");
    document.body.style.overflow = "hidden"
    return {
      type: 'SetTeamPreview',
      data: {status:true,data:data}
    };
  };
  
  export const DisableTeamPreviewPage = () => {
    document.getElementById('app-container').classList.remove("active-contact");
    document.body.style.overflow = "auto"
    return {
      type: 'SetTeamPreview',
      data: {status:false,data:null}
    };
  };
  
  export const EnableProjectPreviewPage = (data) => {
    document.getElementById('app-container').classList.add("active-contact");
    return {
      type: 'SetProjectPreview',
      data: {status:true,data:data}
    };
  };
  
  export const DisableProjectPreviewPage = () => {
    document.getElementById('app-container').classList.remove("active-contact");
    return {
      type: 'SetProjectPreview',
      data: {status:false,data:null}
    };
  };
  
  export const SetLanguage = (data) => ({
    type: 'SetLanguage',
    data: data
  });
  
  export const SetAboutPageData = (data) => ({
    type: 'SetAboutPageData',
    data: data
  });
  
  export const SetTeamPageData = (data) => ({
    type: 'setTeamPageDate',
    data: data
  });
  
  export const SetHomeGallery = (data) => ({
    type: 'HomeGallery',
    data: data
  });
  
  export const SetContactPageData = (data) => ({
    type: 'SetContactPageData',
    data: data
  });
  
  export const SetGallery = (data) => ({
    type: 'SetGalleryPageData',
    data: data
  });
  
  export const SetProjects = (data) => ({
    type: 'SetProjectsPageData',
    data: data
  });
  
  export const setInstagram = (data) => ({
    type: 'SetInstagramPageData',
    data: data
  });
  
  export const SetMenu = (data) => ({
    type: 'SetMenu',
    data: data
  });
  
  export const SetBlog = (data) => ({
    type: 'SetBlogPageData',
    data: data
  });
  
  export const SetMessages = (data) => ({
    type: 'SetMessagesData',
    data: data
  })
  
  export const SetLanguageSetting = (data) => ({
    type: 'SetLanguageSettingData',
    data: data
  })
  
  
  
  
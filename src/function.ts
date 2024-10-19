export const scrollTo = (id?: string) => {
    const target = document.getElementById(`${id ? id : "register-form"}`);
    if (target) {
      target.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };
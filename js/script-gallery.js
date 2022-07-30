function toggleDescription(el) {
      const element = el.parentElement.querySelector('.toggle-area');
      if (element.hasAttribute('hidden')) {
        element.removeAttribute('hidden');
      }else{
        element.setAttribute("hidden", true);
      }
    }
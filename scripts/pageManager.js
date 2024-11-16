const initPage = async () => { 
    try {
        document.querySelector('#content').innerHTML = '';
    } catch (error) {
        console.error('Error initializing page:', error);
    }
};

const movePage = async (pagePath) => {
    try {
      // Fetch the HTML file content
      const response = await fetch(pagePath);
      
      if (!response.ok) {
        throw new Error(`Failed to load page: ${response.status}`);
      }
      
      const htmlContent = await response.text();
      
      // Insert the content into the element
      const contentElement = document.querySelector('#content');
      if (!contentElement) {
        throw new Error('Content element not found');
      }
      
      contentElement.innerHTML = htmlContent;
    } catch (error) {
      console.error('Error loading page:', error);
    }
};
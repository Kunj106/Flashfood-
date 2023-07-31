// Playstore icon functionability

const playStoreUrl = 'https://play.google.com/store/apps/details?id=your-app-package-name';

    document.getElementById('play-store-link').addEventListener('click', function () {
      window.open(playStoreUrl, '_blank');
    });

    // Appstore icon functionability

      const appStoreUrl = 'https://apps.apple.com/app/your-app-id';

    document.getElementById('app-store-link').addEventListener('click', function () {
      window.open(appStoreUrl, '_blank');
    });

    // Wikipedia page functionability

    document.getElementById('https://en.wikipedia.org/wiki/Food_loss_and_waste').addEventListener('click', function(event) {
        event.preventDefault(); 
  
        const wikipediaPage = 'https://en.wikipedia.org/wiki/FoodLossandwaste';
  
        // Open the Wikipedia page in a new tab or window
        window.open(wikipediaPage, '_blank');
});



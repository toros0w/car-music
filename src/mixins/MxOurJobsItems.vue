<template>
  <div class="photo-grid">
    <div v-for="(row, rowIndex) in photoRows" :key="rowIndex" class="photo-row">
      <div v-for="(photo, photoIndex) in row" :key="photoIndex" class="photo-item">
        <img :src="photo.src" :alt="photo.alt" />
        <div class="overlay">
          <span class="overlay-text">Подробнее...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        { src: '/src/assets/img/jobs/1-1.jpeg', alt: 'Photo 1' },
        { src: '/src/assets/img/jobs/1-2.jpeg', alt: 'Photo 2' },
        { src: '/src/assets/img/jobs/1-3.jpeg', alt: 'Photo 3' },
        { src: '/src/assets/img/jobs/1-4.jpeg', alt: 'Photo 4' },
        { src: '/src/assets/img/jobs/1-5.jpeg', alt: 'Photo 5' },
        { src: '/src/assets/img/jobs/1-6.jpeg', alt: 'Photo 6' },
        { src: '/src/assets/img/jobs/2-1.jpeg', alt: 'Photo 7' },
        { src: '/src/assets/img/jobs/2-2.jpeg', alt: 'Photo 8' },
        { src: '/src/assets/img/jobs/2-3.jpeg', alt: 'Photo 9' },
        { src: '/src/assets/img/jobs/2-4.jpeg', alt: 'Photo 10' },
        { src: '/src/assets/img/jobs/2-5.jpeg', alt: 'Photo 11' },
        { src: '/src/assets/img/jobs/2-6.jpeg', alt: 'Photo 12' },
        { src: '/src/assets/img/jobs/3-1.jpeg', alt: 'Photo 13' },
        { src: '/src/assets/img/jobs/3-2.jpeg', alt: 'Photo 14' },
        { src: '/src/assets/img/jobs/3-3.jpeg', alt: 'Photo 15' },
        { src: '/src/assets/img/jobs/3-4.jpeg', alt: 'Photo 16' },
        { src: '/src/assets/img/jobs/3-5.jpeg', alt: 'Photo 17' },
        { src: '/src/assets/img/jobs/3-6.jpeg', alt: 'Photo 18' }
      ]
    }
  },
  computed: {
    photoRows() {
      const rows = []
      for (let i = 0; i < this.photos.length; i += 6) {
        rows.push(this.photos.slice(i, i + 6))
      }
      return rows
    }
  }
}
</script>

<style scoped>
.photo-grid {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh; /* Высота экрана */
  overflow: hidden;
}

.photo-row {
  display: flex;
}

.photo-item {
  position: relative;
  flex: 1; /* Растягивает фото по ширине равномерно */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.photo-item:hover {
  transform: scale(1.02);
  z-index: 1000;
}

.photo-item img {
  width: 100%;
  height: 280px;
  object-fit: cover; /* Центрирование и обрезка фото */
  transition: filter 0.3s ease;
}

.photo-item:hover img {
  filter: blur(2px) brightness(0.5);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-item:hover .overlay {
  opacity: 1;
}

.overlay-text {
  font-family: 'ReformaGrotesk';
  color: white;
  font-size: 24px;
  font-weight: bold;
}
</style>

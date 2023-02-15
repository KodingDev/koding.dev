<script lang="ts">
  const onHover = (event: MouseEvent) => {
    // Get all relevant elements
    document.querySelectorAll('.hoverable').forEach((element) => {
      // Get the bounding rectangle of the element
      const { left, top } = element.getBoundingClientRect();

      // Set the CSS variables
      element.style.setProperty('--mouse-x', `${event.clientX - left}px`);
      element.style.setProperty('--mouse-y', `${event.clientY - top}px`);
    });
  };
</script>

<svelte:body on:mousemove={onHover} />

<script>
  export let created_at;
  export let format;

  const date = new Date(created_at);

  const y = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const m = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const m_2d = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
  const d = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  const date_iso = `${y}-${m_2d}-${d}`;
  const date_formatted = Array.from(format).reduce(
    (str, char) =>
      (str += char.replace("y", y).replace("m", m).replace("d", d)),
    ""
  );
</script>

<time class="post__date" datetime={date_iso}>{date_formatted}</time>

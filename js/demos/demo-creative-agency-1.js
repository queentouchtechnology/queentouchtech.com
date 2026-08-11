/*
Queen Touch Technology — Homepage init
Normal vertical page: smooth-scrolls in-page nav links (data-hash).
(Locomotive Scroll's horizontal-panel mode has been intentionally removed.)
*/
(($ => {

    $('[data-hash]').off().on('click', function(e) {
        const targetId = $(this).attr('href');
        const anchor = $(targetId).get(0);
        if (!anchor) return;
        e.preventDefault();
        e.stopPropagation();
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

})).apply(this, [jQuery]);

import React from 'react';

import withAccessible from './hoc/enhance-accessibility';

/**
 * Main (home) page.
 * @see {@link react}
 * @see {@link react-redux}
 */
export const Main = () => (
  <div className="main">
    <h2>Hello World!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a libero nec
      lacus ultricies pretium in et leo. Phasellus ut lorem leo. Quisque pharetra
      malesuada nisi at venenatis. Sed eu venenatis augue, sit amet gravida lectus.
      Aliquam sed rhoncus tortor. Sed sed erat vitae turpis volutpat commodo. Donec vel
      iaculis turpis. Donec dictum lectus et sem dictum facilisis.
    </p>
    <p>
      Morbi sollicitudin aliquam neque, ac tristique orci ultricies in. Cras ac dui sit
      amet purus molestie euismod quis quis lorem. Duis eu purus enim. Nunc tempus
      euismod lacus eget maximus. Proin augue erat, tristique vitae erat non, laoreet
      egestas libero. Nam non vestibulum libero, eu facilisis elit. Mauris ac congue
      libero. Vivamus euismod nisi et sem scelerisque, nec feugiat nisi congue.
    </p>
    <p>
      Sed semper ut diam et rutrum. Curabitur pulvinar commodo dolor, ut pellentesque
      ligula condimentum sit amet. Ut aliquet dapibus nisl eget imperdiet. Morbi lobortis
      sollicitudin velit sed gravida. Maecenas euismod sagittis est ac viverra.
      Vestibulum ullamcorper ligula vel erat convallis dictum. Mauris ut consectetur
      elit, at aliquam nunc. Cras quis ultricies leo, ut dictum velit. Nullam interdum
      magna eget ex ullamcorper, et sodales diam condimentum. Suspendisse potenti. Proin
      ut rhoncus lectus, nec aliquam lacus. Fusce ultricies vitae ex in sodales.
    </p>
    <p>
      Ut luctus velit vel justo accumsan blandit. Vivamus at tortor turpis. Quisque enim
      lectus, fringilla eu dignissim quis, maximus id turpis. Aenean tincidunt neque a
      purus molestie, quis dapibus nisl molestie. Cras efficitur sit amet arcu nec
      accumsan. Mauris orci est, faucibus eu ipsum eu, feugiat accumsan diam. Nullam
      cursus enim ut nulla tincidunt, at volutpat neque condimentum. Aliquam dapibus
      pretium dictum. Phasellus rhoncus hendrerit tellus, sit amet lobortis justo cursus
      vel.
    </p>
  </div>
);

export default withAccessible()(Main);

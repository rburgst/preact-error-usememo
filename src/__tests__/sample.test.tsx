import { act, render } from '@testing-library/preact';
import { TestComponent } from "../components/test-component";
import React from 'preact/compat';


describe("testcomponent", () => {
    it('should not blow up', async () => {
        const renderResult = render(<TestComponent/>);

        // then
        await act(() => {
            renderResult.rerender(<TestComponent/>);
        });
        
    })
})
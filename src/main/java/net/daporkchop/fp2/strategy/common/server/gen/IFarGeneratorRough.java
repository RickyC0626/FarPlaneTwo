/*
 * Adapted from The MIT License (MIT)
 *
 * Copyright (c) 2020-2020 DaPorkchop_
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 * is furnished to do so, subject to the following conditions:
 *
 * Any persons and/or organizations using this software must include the above copyright notice and this permission notice,
 * provide sufficient credit to the original authors of the project (IE: DaPorkchop_), as well as provide a link to the original project.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

package net.daporkchop.fp2.strategy.common.server.gen;

import lombok.NonNull;
import net.daporkchop.fp2.strategy.common.IFarPiece;
import net.daporkchop.fp2.strategy.common.IFarPos;
import net.minecraft.world.WorldServer;

/**
 * Extracts height and color information from a world for use by a rendering mode.
 * <p>
 * Once initialized, instances of this class are expected to be safely usable by multiple concurrent threads.
 *
 * @author DaPorkchop_
 */
public interface IFarGeneratorRough<POS extends IFarPos, P extends IFarPiece<POS>> extends IFarGenerator {
    @Override
    void init(@NonNull WorldServer world);

    /**
     * Generates a rough estimate of the terrain in the given piece.
     *
     * @param piece the piece to generate
     */
    void generate(@NonNull P piece);

    /**
     * @return whether or not this generator can generate pieces at low resolution
     */
    boolean supportsLowResolution();

    /**
     * @return whether or not low-resolution pieces are inaccurate
     */
    boolean isLowResolutionInaccurate();
}